# Congreso de Jóvenes 2026 — Landing page

Página de inscripción para el Congreso de Jóvenes 2026 de la Iglesia Sinaí
(Altagracia de Orituco, Guárico), del 15 al 18 de octubre de 2026.

Los registros del formulario se guardan en una hoja de Google Sheets a través
de una aplicación web de Google Apps Script.

## Estructura

| Ruta | Qué es |
|---|---|
| `Congreso Jovenes 2026.dc.html` | La página completa: maquetado, estilos y lógica del componente |
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

Luego abre <http://localhost:8777/Congreso%20Jovenes%202026.dc.html>.

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
5. Copia la URL `/exec` y ponla en `REGISTRO_ENDPOINT`, dentro del `.dc.html`.

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

Campos enviados: `nombre`, `apellido`, `edad`, `iglesia`, `direccion_iglesia`.

Columnas de la hoja: `Fecha · Nombre · Apellido · Edad · Iglesia ·
Dirección de la iglesia`. Si cambian, el script rehace la fila de cabeceras.

## Validación y duplicados

Las reglas están **en los dos lados**. El cliente las aplica para dar mensajes
inmediatos en español bajo cada campo; el servidor las repite porque la URL
`/exec` es pública y cualquiera puede llamarla saltándose el formulario.

| Campo | Regla |
|---|---|
| Nombre / Apellido | ≥ 2 letras, sin números; admite acentos, ñ, apóstrofes y guiones |
| Edad | Entero entre 10 y 99 |
| Iglesia | ≥ 3 caracteres |
| Dirección | ≥ 6 caracteres |

El formulario lleva `noValidate` para que no salten los globos del navegador
—en el idioma del sistema y con su propio estilo— antes de los mensajes
propios.

Un registro se considera **duplicado** cuando coinciden **nombre + apellido +
edad** una vez normalizados (sin acentos, sin mayúsculas, sin espacios
sobrantes). En ese caso no se escribe nada y la persona ve una pantalla de
«Ya estás inscrito» en lugar de un error.

La búsqueda y la escritura ocurren dentro del mismo `LockService`: separarlas
dejaría pasar duplicados cuando dos personas envían a la vez.

Hay además un campo señuelo (`website`) oculto fuera de pantalla. Si llega
relleno, la petición se descarta en silencio: los bots completan todos los
campos, las personas no.

## Archivos no versionados

`.gitignore` excluye 21,7 MB de material que la página no referencia, entre
ellos un vídeo de 20 MB. Los archivos siguen en la carpeta local.
