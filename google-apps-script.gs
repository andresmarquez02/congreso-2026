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

var HEADERS = [
  'Fecha',
  'Nombre',
  'Apellido',
  'Edad',
  'Iglesia',
  'Dirección de la iglesia'
];

// Columnas (1-based) que forman la clave de duplicado: Nombre, Apellido, Edad.
var COL_NOMBRE = 2, COL_EDAD = 4;

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

    var row = [
      new Date(),
      clean_(data.nombre),
      clean_(data.apellido),
      clean_(data.edad),
      clean_(data.iglesia),
      clean_(data.direccion_iglesia)
    ];

    // El lock cubre buscar-y-escribir como una sola operación: sin él, dos
    // envíos simultáneos podrían comprobar a la vez y colar el duplicado.
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sh = getSheet_();
      if (existeDuplicado_(sh, claveDe_(data.nombre, data.apellido, data.edad))) {
        return json_({ ok: false, duplicado: true, error: 'Ya existe un registro con esos datos' });
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
  if (clean_(d.iglesia).length < 3) return 'Falta el nombre de la iglesia';
  if (clean_(d.direccion_iglesia).length < 6) return 'Falta la dirección de la iglesia';
  return '';
}

/**
 * Clave de duplicado: nombre + apellido + edad, normalizados.
 * Ignora mayúsculas, acentos y espacios de más, de modo que
 * "José  Pérez" y "jose perez" cuentan como la misma persona.
 */
function claveDe_(nombre, apellido, edad) {
  return norm_(nombre) + '|' + norm_(apellido) + '|' + (parseInt(edad, 10) || '');
}

function norm_(v) {
  return String(v == null ? '' : v)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function existeDuplicado_(sh, clave) {
  var ultima = sh.getLastRow();
  if (ultima < 2) return false;
  var filas = sh.getRange(2, COL_NOMBRE, ultima - 1, COL_EDAD - COL_NOMBRE + 1).getValues();
  for (var i = 0; i < filas.length; i++) {
    if (claveDe_(filas[i][0], filas[i][1], filas[i][2]) === clave) return true;
  }
  return false;
}

/** Prueba de vida: abrir la URL /exec en el navegador debe responder ok. */
function doGet() {
  return json_({ ok: true, service: 'registros-congreso-2026' });
}

/**
 * Prueba manual: selecciona esta función en el editor y pulsa Ejecutar.
 * Sirve para autorizar permisos y confirmar que el SHEET_ID es correcto
 * ANTES de desplegar. Deja una fila de prueba que luego puedes borrar.
 */
function probarEscritura() {
  getSheet_().appendRow([new Date(), 'Prueba', 'Manual', 30, 'Iglesia de prueba', 'Direccion de prueba']);
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
