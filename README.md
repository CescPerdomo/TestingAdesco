# Sistema de Servicio de Agua Potable ADESCO - Fase 1 (Frontend Estático)

## Cómo levantar el sitio localmente

1. Tener instalado Nodejs (recomendado) para usar el servidor HTTP simple.

2. En la terminal, navega a la carpeta raíz del proyecto donde están los archivos HTML, ingresa el comando y ejecutar.

3. Opciones de despliegue como los siguientes comandos para iniciar un servidor local en el puerto 8000:

```bash
**********************************
Procedimiento solo para NodeJs
Instalacion de nodejs : Windows 10/11
en shell : winget install OpenJS.NodeJS.LTS + enter
Luego para comprobar instalacion : node -v  (debería mostrar v22 o mayor (o la LTS del momento) o npm -v debería mostrar 10 o mayor)
en shell (como admin) : ejecuta : cd "elDirectorioraizdelproyecto" y enter, luego ejecutar los demas comandos
Nodejs : npx http-server -p 8000 o npx serve -l 8000 o tambien npx live-server --port=8000 luego abre http://localhost:8000
Con Package.json (si esta declarado 'star' : entonces, npm start+enter en shell (como administrador) 
***********************************
PhP : php -S 0.0.0.0:8000
El Snippet de PowerShell de Windows : Start-Process powershell -ArgumentList Start-WebServer 8000
GitHub Pages
Live Server VSCode
python3 -m http.server 8000
```

4. Abre tu navegador y visita:

```
http://localhost:8000/auth.html (o la url configurada)
```

5. Navega entre las páginas usando los enlaces o modificando la URL para ver las diferentes pantallas.

---

## Estructura de Archivos 

- `auth.html` - Pantalla de login.
- `dashboard.html` - Panel principal con gráficas.
- `pagos.html` - Gestión de pagos y facturas.
- `usuarios.html` - CRUD de usuarios.
- `reportes.html` - Reportes con filtros y exportación.
- `404.html` y `500.html` - Páginas de error personalizadas.(a criterio del desarrollador)
- `assets/css/style.css` - Estilos personalizados y variables. (modificar a criterio del desarrollador)
- `assets/js/app.js` - Lógica jQuery, validaciones y mocks Ajax. (validaciones simples)
- `assets/img/` - Imágenes y logos.

---

## Notas

- El código está preparado para integrarse con Laravel en la Fase 2. (a criterio del desarrollador)
- Se usan comentarios Blade-friendly para facilitar la migración. (a criterio del desarrollador)
- Las tablas usan DataTables y los selects usan Select2 con datos simulados.
- La gráfica usa Chart.js con datos ficticios.
- Se prioriza accesibilidad y rendimiento según WCAG AA y Lighthouse. (pautas de accesiblidad opcionales)

---
