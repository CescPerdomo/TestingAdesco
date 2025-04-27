# ADESCO Sistema Administrativo - Fase 1 (Frontend Estático)

## Cómo levantar el sitio localmente

1. Asegúrate de tener Python 3 instalado para usar el servidor HTTP simple.

2. En la terminal, navega a la carpeta raíz del proyecto donde están los archivos HTML.

3. Ejecuta el siguiente comando para iniciar un servidor local en el puerto 8000:

```bash
python3 -m http.server 8000
```

4. Abre tu navegador y visita:

```
http://localhost:8000/auth.html
```

5. Navega entre las páginas usando los enlaces o modificando la URL para ver las diferentes pantallas.

---

## Estructura de Archivos

- `auth.html` - Pantalla de login.
- `dashboard.html` - Panel principal con KPIs y gráfica.
- `pagos.html` - Gestión de pagos y facturas.
- `usuarios.html` - CRUD de usuarios.
- `reportes.html` - Reportes con filtros y exportación.
- `404.html` y `500.html` - Páginas de error personalizadas.
- `assets/css/style.css` - Estilos personalizados y variables.
- `assets/js/app.js` - Lógica jQuery, validaciones y mocks Ajax.
- `assets/img/` - Imágenes y logos.

---

## Notas

- El código está preparado para integrarse con Laravel en la Fase 2.
- Se usan comentarios Blade-friendly para facilitar la migración.
- Las tablas usan DataTables y los selects usan Select2 con datos simulados.
- La gráfica usa Chart.js con datos ficticios.
- Se prioriza accesibilidad y rendimiento según WCAG AA y Lighthouse.

---
