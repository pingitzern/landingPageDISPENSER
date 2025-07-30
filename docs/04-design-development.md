# Fase 4: Diseño y Desarrollo de la Landing

## 1. Wireframe y Layout

- **Desktop / Mobile**  
  - Grid de 12 columnas (Tailwind CSS).  
  - Secciones apiladas en mobile, side-by-side en desktop.
- **Esquema rápido**  
  1. Header con logo y nav minimal (“Inicio”, “Beneficios”, “Precios”, “Contacto”).  
  2. Hero full-width con imagen de fondo y CTA central.  
  3. Bloques de iconos (Pain vs Beneficios) en 3 columnas.  
  4. Diagrama “Cómo Funciona” con stepper horizontal/vertical.  
  5. Testimonios en carrusel.  
  6. Tabla comparativa responsiva.  
  7. FAQ con acordeón.  
  8. Footer con formulario + WhatsApp flotante.

## 2. Tecnologías y Stack

- **Frontend**  
  - HTML5 + Tailwind CSS (configuración base).  
  - Vanilla JS para interacciones (acordeón, carrusel).
- **Integraciones**  
  - Formularios → Typeform embebido o Formspree (endpoint propio).  
  - Chat → WhatsApp API (botón flotante).
- **Analytics & SEO**  
  - Google Analytics 4 + Tag Manager.  
  - Meta tags dinámicas en HTML.

## 3. Estructura de Archivos

dispenser-water-campaign/
├── docs/
│ └── 04-design-development.md
├── public/
│ ├── index.html
│ ├── assets/
│ │ ├── images/
│ │ └── icons/
│ └── scripts/
│     └── main.js
├── src/
│ └── styles/
│     └── tailwind.config.js
├── .gitignore
├── package.json
└── README.md

## 4. Configuración Inicial

1. **Inicializar proyecto**  
   ```bash
   npm init -y
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
2. **Tailwind config**
   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./public/**/*.html", "./src/**/*.js"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
3. **Scripts NPM**
   ```jsonc
   // package.json (extract)
   "scripts": {
     "build:css": "tailwindcss -i ./src/styles/input.css -o ./public/assets/styles.css --minify",
     "watch:css": "tailwindcss -i ./src/styles/input.css -o ./public/assets/styles.css --watch"
   }
   ```
4. **Flujo de Trabajo**  
   - Descargar assets (logos, fotos, íconos) en `public/assets/images`.  
   - Escribir el HTML base en `public/index.html` con placeholders de contenido.  
   - Generar CSS con `npm run build:css`.  
   - Añadir interacciones en `public/scripts/main.js`.  
   - Probar en local:
     ```bash
     npx serve public
     ```
   - Validar responsive en Chrome DevTools.  
   - Commit y push de cada avance en feature branches:
     - `feature/wireframe`
     - `feature/tailwind-setup`
     - `feature/hero-section`
     - etc.

## 5. Siguientes Pasos
- Crear el branch `feature/tailwind-setup` y hacer el build inicial de CSS.
- Diseñar el wireframe en `public/index.html` (sólo estructura HTML).
- Abrir Pull Request para revisión de layout.
- Crear Issues:
  - “Configurar Tailwind y PostCSS”
  - “Estructura HTML base”
  - “Implementar Hero Section”
  - “Agregar interacciones JS básicas”
