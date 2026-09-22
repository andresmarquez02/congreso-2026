/**
 * Congreso de Jóvenes 2026 — receptor de registros.
 *
 * Recibe el POST de la landing y agrega una fila al Google Sheet de registros.
 * Usa openById, así que funciona igual como proyecto INDEPENDIENTE o como
 * script dentro del Sheet. La vía independiente es la recomendada porque
 * evita el error "No se pudo abrir el archivo" de las cuentas múltiples.
 *
 * Despliegue (una sola vez):
 *   1. Ir a https://script.google.com/home/projects/create
 *      (asegúrate de estar en la MISMA cuenta que puede EDITAR el Sheet).
 *   2. Pegar este código, reemplazando todo el contenido de Codigo.gs.
 *   3. Implementar → Nueva implementación → tipo "Aplicación web".
 *   4. Ejecutar como: Yo.  Quién tiene acceso: Cualquier usuario.
 *   5. Autorizar los permisos (aparece "Google no ha verificado esta app":
 *      Configuración avanzada → Ir a <nombre del proyecto>).
 *   6. Copiar la URL /exec y pegarla en REGISTRO_ENDPOINT dentro del .dc.html.
 *
 * Al cambiar este código hay que crear una NUEVA VERSIÓN de la implementación
 * (Implementar → Gestionar implementaciones → editar → Versión: Nueva),
 * de lo contrario la URL sigue sirviendo el código viejo.
 */

var SHEET_ID = '1vsYiLrkeSa1p-7BG6W1fwGff9D5nmMcuSIsm2lD9NR4';
var SHEET_NAME = 'Registros';

// Carpeta de Drive con las fotos de la galería. El equipo sube ahí desde el
// teléfono y la página las recoge sola, sin tocar el código. El ID es el
// trozo largo de drive.google.com/drive/folders/<ID>.
//
// La galería vive entera de esta carpeta: si esto no apunta a ninguna, o si
// Drive falla, la sección enseña un aviso de "vuelve en un rato" en vez de
// quedarse en blanco.
var CARPETA_FOTOS_ID = '1LCL7k0V15hTKDVwRM4Rf_yiZXo0X4-0b';

var FOTOS_MAX = 40;          // Cuántas fotos como mucho se publican.
// Cuánto se reutiliza el listado sin volver a recorrer Drive. Es un
// equilibrio: recorrer la carpeta tarda varios segundos, pero una foto
// recién subida no aparece hasta que caduca esto. Con 90s, quien sube
// una foto la ve en la página en menos de dos minutos. Para verla al
// instante, ejecutar refrescarFotos() en el editor.
var FOTOS_CACHE_SEG = 90;
var FOTOS_TOPE_LECTURA = 300; // Freno por si la carpeta crece sin control.

// El orden de HEADERS es el orden de las columnas y es el formato único del
// que salen los certificados: 'Nombre completo' ya viene capitalizado para
// combinar correspondencia sin tocar nada a mano.
//
// OJO al cambiar este listado sobre una hoja que ya tiene filas: el script
// rehace la cabecera, pero los datos viejos se quedan en sus columnas y
// quedan desalineados. Vacía la pestaña (o crea una nueva) antes de estrenar
// una estructura distinta.
var HEADERS = [
  'Fecha',
  'Cédula',
  'Nombre',
  'Apellido',
  'Nombre completo',
  'Edad',
  'Teléfono',
  'Estado',
  'Ciudad',
  'Dirección de casa',
  'Iglesia',
  'Dirección de la iglesia'
];

// Columnas (1-based) que hay que tratar como texto y/o leer para el duplicado.
var COL_CEDULA = 2, COL_TELEFONO = 7;

// Códigos de operadora móvil de Venezuela. La misma lista que el formulario:
// si algún día sale una operadora nueva, hay que tocar los dos sitios.
var CODIGOS_TEL = ['0412', '0422', '0414', '0424', '0416', '0426'];

var ESTADOS = [
  'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo',
  'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico',
  'La Guaira', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta',
  'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Yaracuy', 'Zulia'
];

function doPost(e) {
  try {
    var data = parseBody_(e);

    // Honeypot: los bots llenan campos ocultos, las personas no.
    if (String(data.website || '').trim()) {
      return json_({ ok: true });
    }

    // El navegador ya validó, pero cualquiera puede llamar a esta URL
    // directamente: la validación que cuenta es esta.
    var error = validar_(data);
    if (error) {
      return json_({ ok: false, error: error });
    }

    // Todo lo que se escribe pasa antes por el mismo formateo: la hoja es la
    // fuente de los certificados y de la agenda de contactos, así que no puede
    // llevar "JOSE perez", "0412 123 4567" ni "calle 5,SECTOR el rosario".
    var nombre = titulo_(data.nombre);
    var apellido = titulo_(data.apellido);
    var cedula = soloDigitos_(data.cedula);

    var row = [
      new Date(),
      cedula,
      nombre,
      apellido,
      titulo_(nombre + ' ' + apellido),
      clean_(data.edad),
      telefono_(data.telefono_codigo, data.telefono_numero),
      clean_(data.estado),
      titulo_(data.ciudad),
      titulo_(data.direccion_casa),
      titulo_(data.iglesia),
      titulo_(data.direccion_iglesia)
    ];

    // El lock cubre buscar-y-escribir como una sola operación: sin él, dos
    // envíos simultáneos podrían comprobar a la vez y colar el duplicado.
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sh = getSheet_();
      if (existeDuplicado_(sh, cedula)) {
        return json_({ ok: false, duplicado: true, error: 'Ya existe un registro con esa cédula' });
      }
      sh.appendRow(row);
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message || err) });
  }
}

/** Devuelve el mensaje del primer problema encontrado, o '' si todo está bien. */
function validar_(d) {
  var soloTexto = /^[A-Za-zÀ-ɏñÑ][A-Za-zÀ-ɏñÑ\s'’.\-]*$/;
  var nombre = clean_(d.nombre), apellido = clean_(d.apellido);
  if (nombre.length < 2 || !soloTexto.test(nombre)) return 'Nombre inválido';
  if (apellido.length < 2 || !soloTexto.test(apellido)) return 'Apellido inválido';
  var edad = Number(d.edad);
  if (!isFinite(edad) || Math.floor(edad) !== edad || edad < 10 || edad > 99) return 'La edad debe estar entre 10 y 99';
  var cedula = soloDigitos_(d.cedula);
  if (cedula.length < 6 || cedula.length > 9) return 'Cédula inválida';
  if (CODIGOS_TEL.indexOf(clean_(d.telefono_codigo)) < 0) return 'Código de operadora inválido';
  if (soloDigitos_(d.telefono_numero).length !== 7) return 'Número de teléfono inválido';
  if (ESTADOS.indexOf(clean_(d.estado)) < 0) return 'Estado inválido';
  if (clean_(d.ciudad).length < 3) return 'Falta la ciudad o municipio';
  if (clean_(d.direccion_casa).length < 6) return 'Falta la dirección de casa';
  // Iglesia y dirección de la iglesia son opcionales: quien no se congrega
  // también se inscribe. Solo se validan cuando vienen con algo escrito.
  var iglesia = clean_(d.iglesia);
  if (iglesia && iglesia.length < 3) return 'Nombre de iglesia inválido';
  var dirIglesia = clean_(d.direccion_iglesia);
  if (dirIglesia && dirIglesia.length < 6) return 'Dirección de la iglesia inválida';
  return '';
}

/**
 * La cédula es la identidad del registro: una persona, una fila. Se compara
 * en dígitos para que "V-12.345.678" y "12345678" cuenten como la misma.
 */
function soloDigitos_(v) {
  return String(v == null ? '' : v).replace(/\D+/g, '').slice(0, 20);
}

/** Código + número en un solo formato: "0412-1234567". */
function telefono_(codigo, numero) {
  return clean_(codigo) + '-' + soloDigitos_(numero);
}

/**
 * "josé  PÉREZ" -> "José Pérez"; "calle 5,SECTOR el rosario" ->
 * "Calle 5, Sector El Rosario". Deja en minúscula las partículas de enlace
 * para que no salga "Altagracia De Orituco" impreso en un certificado.
 */
var MINUSCULAS = ['de', 'del', 'la', 'las', 'los', 'y', 'e', 'en'];

function titulo_(v) {
  return clean_(v)
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(function (w, i) {
      var limpia = w.replace(/[^\wÀ-ÿ]/g, '').toLowerCase();
      if (i > 0 && MINUSCULAS.indexOf(limpia) >= 0) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
}

function existeDuplicado_(sh, cedula) {
  var ultima = sh.getLastRow();
  if (ultima < 2) return false;
  var filas = sh.getRange(2, COL_CEDULA, ultima - 1, 1).getValues();
  for (var i = 0; i < filas.length; i++) {
    if (soloDigitos_(filas[i][0]) === cedula) return true;
  }
  return false;
}

/**
 * Prueba de vida, consulta de cédula y listado de la galería.
 *
 *   /exec                  -> { ok: true, service: ... }
 *   /exec?cedula=12345678  -> { ok: true, existe: true|false }
 *   /exec?fotos=1          -> { ok: true, fotos: [{ id, nombre }, ...] }
 *
 * El formulario la usa para avisar en cuanto se sale del campo, sin esperar al
 * envío. Solo devuelve un sí/no: ningún dato de la persona sale de la hoja.
 */
function doGet(e) {
  var params = (e && e.parameter) || {};
  if (params.fotos) return json_(fotos_());
  var cedula = soloDigitos_(params.cedula);
  if (!cedula) return json_({ ok: true, service: 'registros-congreso-2026' });
  if (cedula.length < 6 || cedula.length > 9) return json_({ ok: false, error: 'Cédula inválida' });
  return json_({ ok: true, existe: existeDuplicado_(getSheet_(), cedula) });
}

/**
 * Listado de la carpeta de fotos, de la más nueva a la más vieja.
 *
 * Nunca lanza: si la carpeta no está configurada, no existe o Drive falla,
 * devuelve una lista vacía y la página se queda con las fotos del repo. Una
 * galería con menos fotos se lee bien; una galería rota, no.
 */
function fotos_() {
  try {
    if (!CARPETA_FOTOS_ID || CARPETA_FOTOS_ID.indexOf('PEGA_AQUI') === 0) {
      return { ok: true, fotos: [] };
    }
    // Drive es lento y la galería la ve todo el que entra: sin caché, cada
    // visita pagaría el recorrido de la carpeta entera.
    var cache = CacheService.getScriptCache();
    var guardado = cache.get('fotos');
    if (guardado) return JSON.parse(guardado);

    var it = DriveApp.getFolderById(CARPETA_FOTOS_ID).getFiles();
    var fotos = [];
    var leidos = 0;
    while (it.hasNext() && leidos < FOTOS_TOPE_LECTURA) {
      leidos++;
      var f = it.next();
      if (String(f.getMimeType() || '').indexOf('image/') !== 0) continue;
      fotos.push({ id: f.getId(), nombre: f.getName(), fecha: f.getDateCreated().getTime() });
    }
    fotos.sort(function (a, b) { return b.fecha - a.fecha; });
    fotos = fotos.slice(0, FOTOS_MAX).map(function (f) {
      return { id: f.id, nombre: f.nombre };
    });

    var salida = { ok: true, fotos: fotos };
    cache.put('fotos', JSON.stringify(salida), FOTOS_CACHE_SEG);
    return salida;
  } catch (err) {
    return { ok: false, fotos: [], error: String(err && err.message || err) };
  }
}

/**
 * Ejecútala UNA VEZ para conceder el permiso de Drive.
 *
 * fotos_() envuelve todo en try/catch, y ahí está la trampa: Apps Script solo
 * abre el diálogo de autorización cuando la excepción de permiso ESCAPA de la
 * función. Al atraparla, el script "termina bien" y Google no pregunta nada,
 * así que refrescarFotos() se queda repitiendo el mismo error para siempre.
 *
 * Esta no atrapa nada a propósito: al ejecutarla salta el diálogo, aceptas el
 * acceso a Drive y a partir de ahí el resto ya puede leer la carpeta.
 *
 * Después hay que publicar una VERSIÓN NUEVA de la implementación: el permiso
 * queda concedido en el proyecto, pero la URL /exec sigue sirviendo la versión
 * anterior, que se desplegó sin ese alcance.
 */
function autorizarDrive() {
  var carpeta = DriveApp.getFolderById(CARPETA_FOTOS_ID);
  Logger.log('OK: acceso concedido a la carpeta "%s"', carpeta.getName());
}

/**
 * Vacía la caché de la galería. Sirve para ver una foto recién subida sin
 * esperar los 5 minutos: selecciona esta función en el editor y Ejecutar.
 */
function refrescarFotos() {
  CacheService.getScriptCache().remove('fotos');
  Logger.log('Caché de fotos vaciada: %s', JSON.stringify(fotos_()));
}

/**
 * Prueba manual: selecciona esta función en el editor y pulsa Ejecutar.
 * Sirve para autorizar permisos y confirmar que el SHEET_ID es correcto
 * ANTES de desplegar. Deja una fila de prueba que luego puedes borrar.
 */
function probarEscritura() {
  getSheet_().appendRow([
    new Date(), '99999999', 'Prueba', 'Manual', 'Prueba Manual', 30, '0412-0000000',
    'Guárico', 'Altagracia de Orituco', 'Calle de prueba, casa 1',
    'Iglesia de prueba', 'Sector de prueba'
  ]);
  Logger.log('OK: fila de prueba escrita en "%s"', getSheet_().getName());
}

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (ignore) {
      // Cae al parseo por parámetros de formulario.
    }
  }
  return (e && e.parameter) || {};
}

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  if (sh.getLastRow() === 0) {
    escribirCabeceras_(sh);
    return sh;
  }
  // Si las columnas cambiaron (p. ej. se eliminó "Origen"), rehace la fila 1
  // para que los títulos no queden desfasados de los datos.
  var actuales = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), HEADERS.length)).getValues()[0];
  var iguales = HEADERS.every(function (h, i) { return String(actuales[i] || '').trim() === h; }) &&
                String(actuales[HEADERS.length] || '').trim() === '';
  if (!iguales) {
    sh.getRange(1, 1, 1, actuales.length).clearContent();
    escribirCabeceras_(sh);
  }
  return sh;
}

function escribirCabeceras_(sh) {
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sh.setFrozenRows(1);
  // Texto plano en cédula y teléfono: si no, Sheets los convierte en números
  // y se come el cero inicial de "0412…" y los puntos de la cédula.
  var filas = Math.max(sh.getMaxRows() - 1, 1);
  sh.getRange(2, COL_CEDULA, filas, 1).setNumberFormat('@');
  sh.getRange(2, COL_TELEFONO, filas, 1).setNumberFormat('@');
}

/** Respuesta JSON. Apps Script añade Access-Control-Allow-Origin: * al servirla. */
function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function clean_(v) {
  return String(v == null ? '' : v).trim().slice(0, 300);
}
