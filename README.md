# Congreso de Jóvenes 2026 — Landing page

Página de inscripción para el Congreso de Jóvenes 2026 de la Iglesia Sinaí
(Altagracia de Orituco, Guárico), del 15 al 18 de octubre de 2026.

Los registros del formulario se guardan en una hoja de Google Sheets a través
de una aplicación web de Google Apps Script.

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | La página completa: maquetado, estilos y lógica del componente |
| `google-apps-script.gs` | Backend que recibe el formulario y escribe en el Sheet |
| `support.js` | Runtime del componente (`<x-dc>`, `<sc-if>`, `{{ }}`) |
| `_ds/` | Design system: tokens de color, tipografía y espaciado |
| `uploads/` | Imágenes de la galería y logos |

La página es un **Design Component**: el marcado vive dentro de `<x-dc>` y la
lógica en el `<script data-dc-script>` del final, como una clase
`Component extends DCLogic` con `state`, `setState` y `renderVals()`.

## Ver la página en local

`support.js` carga el documento por `fetch`, así que **no funciona abriendo el
archivo con doble clic** (`file://`). Hace falta un servidor:

```bash
python -m http.server 8777
```

Luego abre <https://jovenes-unidos-congreso-2026.vercel.app/>.

## Conectar el formulario al Sheet

El backend vive en un proyecto de Apps Script independiente y escribe en la
hoja mediante `SpreadsheetApp.openById`.

1. Crea un proyecto en <https://script.google.com/home/projects/create> con una
   cuenta que pueda **editar** la hoja.
2. Pega el contenido de `google-apps-script.gs` y ajusta `SHEET_ID`.
3. Ejecuta la función `probarEscritura` una vez: autoriza los permisos y
   confirma que el ID es correcto. Deja una fila de prueba que puedes borrar.
4. **Implementar → Nueva implementación → Aplicación web**, con:
   - **Ejecutar como:** Yo
   - **Quién tiene acceso:** Cualquier usuario
5. Copia la URL `/exec` y ponla en `REGISTRO_ENDPOINT`, dentro de `index.html`.

> Los dos ajustes del paso 4 están acoplados: mientras «Ejecutar como» sea
> *Usuario que accede a la aplicación web*, Google no acepta «Cualquier
> usuario» y revierte el valor sin avisar. Cambia primero «Ejecutar como».

Al modificar `google-apps-script.gs` hay que publicar una **versión nueva** de
la implementación existente (*Gestionar implementaciones → ✏️ → Versión:
Nueva*). Si creas otra implementación distinta obtendrás una URL distinta.

Para comprobar que está publicado y es público, abre la URL `/exec` en una
ventana de incógnito: debe responder
`{"ok":true,"service":"registros-congreso-2026"}`. Si aparece la pantalla de
inicio de sesión de Google, el despliegue no es público.

## Cómo viaja el registro

El formulario envía un `POST` con el cuerpo en JSON, pero declarando
`Content-Type: text/plain;charset=utf-8`. Es intencional: así el navegador lo
trata como petición simple y no dispara el *preflight* de CORS, que Apps Script
no sabe responder. La respuesta se sirve desde `script.googleusercontent.com`
con `Access-Control-Allow-Origin: *`.

Campos enviados: `nombre`, `apellido`, `cedula`, `edad`, `telefono_codigo`,
`telefono_numero`, `estado`, `ciudad`, `direccion_casa`, `iglesia`,
`direccion_iglesia`.

Columnas de la hoja: `Fecha · Cédula · Nombre · Apellido · Nombre completo ·
Edad · Teléfono · Estado · Ciudad · Dirección de casa · Iglesia ·
Dirección de la iglesia`. Si cambian, el script rehace la fila de cabeceras.

Ese orden es el **formato único** del que salen los certificados y la agenda de
contactos, así que nada se escribe tal cual llega:

| Dato | Entra | Se guarda |
|---|---|---|
| Cédula | `V-12.345.678` | `12345678` (solo dígitos) |
| Teléfono | `0412` + `123 45 67` | `0412-1234567` |
| Nombre completo | `josé` + `PÉREZ` | `José Pérez` |
| Ciudad / direcciones | `calle 5,SECTOR el rosario` | `Calle 5, Sector El Rosario` |
| Estado | (lista cerrada) | `Guárico` |

`titulo_()` deja en minúscula las partículas de enlace (`de`, `del`, `la`, `y`,
`en`…) para que un certificado no salga con «Altagracia De Orituco». Las
columnas de cédula y teléfono llevan formato de texto: si no, Sheets se come el
cero inicial de `0412…`.

> Al estrenar esta estructura sobre la hoja vieja, **vacía la pestaña primero**.
> El script rehace la cabecera, pero las filas anteriores se quedan en sus
> columnas de origen y quedarían corridas bajo los títulos nuevos.

## Validación y duplicados

Las reglas están **en los dos lados**. El cliente las aplica para dar mensajes
inmediatos en español bajo cada campo; el servidor las repite porque la URL
`/exec` es pública y cualquiera puede llamarla saltándose el formulario.

| Campo | Regla |
|---|---|
| Nombre / Apellido | ≥ 2 letras, sin números; admite acentos, ñ, apóstrofes y guiones |
| Cédula | Obligatorio · de 6 a 9 dígitos una vez quitados puntos, guiones y la letra · no puede estar ya en la hoja |
| Edad | Entero entre 10 y 99 |
| Teléfono | Obligatorio · código de la lista de operadoras + 7 dígitos |
| Estado | Obligatorio · uno de los 24 de la lista cerrada |
| Ciudad o municipio | Obligatorio · ≥ 3 caracteres |
| Dirección de casa | Obligatorio · ≥ 6 caracteres |
| Iglesia | **Opcional** · si se escribe, ≥ 3 caracteres |
| Dirección de la iglesia | **Opcional** · si se escribe, ≥ 6 caracteres |

Los dos campos de iglesia son opcionales a propósito: quien todavía no se
congrega también tiene que poder inscribirse. La dirección que sí hace falta
es la de la casa.

El teléfono son dos controles (`telefono_codigo` y `telefono_numero`) que
cuentan como un solo campo de cara al error. Los códigos válidos son los de las
tres operadoras móviles —Digitel `0412` `0422`, Movistar `0414` `0424`,
Movilnet `0416` `0426`— y viven en la constante `OPERADORAS` de `index.html` y
en `CODIGOS_TEL` de `google-apps-script.gs`. La lista de estados está igual de
duplicada (`ESTADOS` en ambos): **si se toca una, hay que tocar la otra**. Los
`<select>` del formulario se rellenan desde esas constantes con
`poblarListas()`, así que el marcado no repite ningún valor.

El formulario lleva `noValidate` para que no salten los globos del navegador
—en el idioma del sistema y con su propio estilo— antes de los mensajes
propios.

Un registro se considera **duplicado** cuando la **cédula** ya está en la hoja,
comparando solo los dígitos: `V-12.345.678` y `12345678` son la misma persona.
En ese caso no se escribe nada y quien envía ve una pantalla de «Ya estás
inscrito» en lugar de un error. Una cédula, una fila: es lo que garantiza que
el listado de certificados no lleve a nadie repetido.

El aviso llega antes del envío. Al salir del campo de la cédula, la página
consulta `GET /exec?cedula=12345678`, que responde `{ ok: true, existe: … }`, y
pinta el error bajo el campo; a partir de ahí el formulario no deja enviar con
esa cédula aunque se rellene todo lo demás. Las cédulas ya vistas se recuerdan
en `_cedulasTomadas` mientras la pestaña siga abierta, de modo que «Registrar a
otra persona» tampoco las vuelve a aceptar.

> Esa consulta es pública, como el resto de la URL `/exec`. Solo devuelve un
> sí/no —ningún nombre ni dato sale de la hoja—, pero significa que cualquiera
> que pruebe una cédula puede saber si esa persona está inscrita. Si eso
> molesta, se quita el bloque de `doGet` que mira `e.parameter.cedula`: el
> formulario sigue rechazando el duplicado, solo que al enviar en vez de antes.

La comprobación del cliente es una cortesía; la que manda es la del servidor,
dentro del `LockService`, porque la URL `/exec` es pública.

La búsqueda y la escritura ocurren dentro del mismo `LockService`: separarlas
dejaría pasar duplicados cuando dos personas envían a la vez.

Hay además un campo señuelo (`website`) oculto fuera de pantalla. Si llega
relleno, la petición se descarta en silencio: los bots completan todos los
campos, las personas no.

## La galería

Las 15 fotos de `uploads/` son la base y están escritas en el marcado. Delante
de ellas, la página coloca las que el equipo va subiendo a una **carpeta de
Google Drive**, de la más nueva a la más vieja.

`GET /exec?fotos=1` devuelve `{ ok: true, fotos: [{ id, nombre }] }` leyendo la
carpeta con `DriveApp`. El listado se guarda en `CacheService` **5 minutos**,
porque Drive es lento y la galería la ve todo el que entra; una foto recién
subida tarda eso en aparecer, o lo que tardes en ejecutar `refrescarFotos()` en
el editor de Apps Script.

Cada foto se pinta con `https://drive.google.com/thumbnail?id=<id>&sz=w900`, y
el lightbox pide la misma con `sz=w1600`.

> Esa URL de miniatura **no está documentada por Google** y tiene límites de
> tráfico; es hoy la única forma estable de enseñar una imagen de Drive en una
> web, pero no es un CDN. Por eso las fotos del repositorio siguen ahí: si el
> listado falla, si la carpeta está vacía o si Drive deja de servir una imagen,
> esa `<img>` se quita sola (`onerror`) y la galería se queda con lo que tenga.
> Nunca se ve un hueco roto ni una sección vacía.

El botón «Ver más fotos» no necesita nada: `applyMedia()` decide qué se ve por
posición en la rejilla, así que las de Drive entran en el recuento solas.

### Configurar la carpeta

1. Crear una carpeta en Drive con la cuenta **dueña del Apps Script**.
2. Compartir → **Cualquier persona con el enlace** → *Lector*. Hace falta:
   las miniaturas las sirve Google directamente al navegador de quien visita.
3. Dar permiso de **Editor** a quienes vayan a subir fotos.
4. Copiar el ID de la URL `drive.google.com/drive/folders/<ID>` y pegarlo en
   `CARPETA_FOTOS_ID`, dentro de `google-apps-script.gs`.
5. Publicar **versión nueva** de la implementación. Leer Drive es un permiso
   que el script no tenía, así que Google pedirá autorizar otra vez.

Mientras `CARPETA_FOTOS_ID` siga con el texto de ejemplo, el endpoint devuelve
una lista vacía y la galería se queda con las 15 del repositorio. No es un
error: es el estado por defecto.

> En esa carpeta van **solo fotos de la galería**. Los logos de las
> organizaciones participantes no: viven en `uploads/` y se pintan en la
> sección «Aliados» (`[data-allies]`), que es otra rejilla y que este código no
> toca. Todo lo que sea una imagen y esté en la carpeta sale publicado en la
> galería, así que lo que no deba verse ahí, no se sube ahí.

## Comportamiento en móvil

Hay un bloque `@media (max-width: 759px)` al final de los estilos con dos
ajustes que no se pueden resolver con los mismos valores que en escritorio:

- **La tira de fotos del hero** pasa a ser un marquee que avanza solo, igual
  que la franja naranja de debajo. Repartir cinco imágenes con `flex:1` en
  390px las dejaba en astillas de unos 70px de ancho; y resolverlo con scroll
  horizontal se peleaba con el scroll vertical de la página. El marquee no
  pide ninguna interacción, así que no compite con nada.

  El maquetado va en un raíl con dos pistas idénticas (la segunda con
  `aria-hidden`), porque `lbxMarquee` desplaza un 50% y necesita que el
  contenido esté duplicado para que el ciclo no tenga saltos. En escritorio
  el raíl y la primera pista son `display:contents` — las imágenes vuelven a
  ser hijas directas del flex, como si no existieran — y la copia se oculta.

- **El titular** sube de cuerpo pasando `2026` a su propia línea. Con el año
  en la misma línea que «Jóvenes», esa línea medía 333px de los 354
  disponibles y no había margen para crecer. El tamaño sale de un `calc`
  sobre el ancho real de la pantalla, no de un `vw` fijo, que se desbordaba
  en pantallas de 320px.
- **Las manchas de color** (amarillo, azul y rojo) se reposicionan en
  triángulo y suben de intensidad. Con los valores de escritorio caían las
  tres en los primeros 200px de la pantalla, detrás del header y
  solapadas entre sí, de modo que los tres colores se mezclaban en un tono
  sucio en vez de leerse por separado.

Ambos bloques usan `!important` porque los estilos del maquetado son inline y
de otro modo ganarían ellos.

El resto del diseño responsive se resuelve en `applyMedia()`, dentro de la
lógica del componente, que ajusta columnas de rejilla según `window.innerWidth`.

## Archivos no versionados

`.gitignore` excluye 21,7 MB de material que la página no referencia, entre
ellos un vídeo de 20 MB. Los archivos siguen en la carpeta local.
