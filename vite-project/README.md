# Proyecto Web Project Around React Sprint 13

## Descripción general

Este proyecto es la evolución del Sprint 12 de **Web Interactiva con POO y JavaScript Asíncrono**, migrado y reescrito con **Vite + React** para aprovechar las ventajas de un framework moderno y una herramienta de bundling rápida.

El proyecto mantiene la funcionalidad central de gestionar perfiles de usuario mediante tarjetas (cards), con opciones para añadir, editar, eliminar y dar "like". Además, se incorporan popups para mostrar imágenes y formularios, mejorando la experiencia de usuario con una UI reactiva y componible.

---

## Cambio del Sprint 12 a Vite + React

### Sprint 12 - Resumen

- Aplicación web interactiva con Programación Orientada a Objetos avanzada (POO) en JavaScript.
- Uso intensivo de JavaScript Asíncrono para llamadas HTTP a APIs REST.
- Modularización con ES Modules y manejo de dependencias con NPM.
- Arquitectura basada en clases que manejan tarjetas, formularios y popups.
- Experiencia de usuario con validación, carga y mensajes dinámicos.

### Nueva versión con Vite + React

- Migración a React para aprovechar componentes reutilizables y gestión declarativa del estado.
- Vite como entorno de desarrollo moderno, ultra rápido, con recarga en caliente (HMR).
- Estructura basada en componentes funcionales con hooks para manejar estados y efectos.
- Mejor separación de responsabilidades: componentes para Header, Footer, Main, Popups y Formularios.
- Integración de imágenes y assets optimizados en la carpeta `public`.
- Manejo simplificado de eventos y ciclos de vida con React.
- Código más mantenible y escalable, alineado con estándares actuales del ecosistema frontend.

---

## 📸 Vista Previa (opcional)

\_![Demo de la app](images/moved_project-4-01-eng.gif)

## Estructura del Proyecto

```plaintext
public/
│   vite.svg
│
└───images/
    │   Addbutton.png
    │   Avatar.jpg
    │   baldmountains.jpg
    │   Closeicon.svg
    │   DS_Store
    │   Editbutton.png
    │   lagobraies.jpg
    │   lake.jpg
    │   latemar.jpg
    │   logoaround.png
    │   moved_project-4-01-eng.gif
    │   Trash.png
    │   Union.svg
    │   vanoise.jpg
    │   Vector.svg
    │   yosemite.jpg

src/
│   index.css
│   main.jsx
│
├───assets/
│       react.svg
│
├───components/
│   │   App.jsx
│   │
│   ├───Footer/
│   │       Footer.jsx
│   │
│   ├───Header/
│   │       Header.jsx
│   │
│   ├───ImagePopup/
│   │       ImagePopup.jsx
│   │
│   └───Main/
│       │   Main.jsx
│       │
│       ├───components/
│       │   ├───Card/
│       │   │       Card.jsx
│       │   │
│       │   ├───ImagePopup/
│       │   │       ImagePopup.jsx
│       │   │
│       │   └───Popup/
│       │           Popup.jsx
│       │
│       └───form/
│           ├───EditAvatar/
│           │       EditAvatar.jsx
│           │
│           ├───EditProfile/
│           │       EditProfile.jsx
│           │
│           └───NewCard/
│                   NewCard.jsx

vendor/
│   normalize.css
│
└───fonts/
        DS_Store
        fonts.css
        Inter-Bold.woff2
        Inter-Regular.woff2
        Inter-SemiBold.woff2
```

## Tecnologías usadas

Herramienta/Librería Descripción
React Librería para construir UI declarativa y basada en componentes.
Vite Herramienta moderna para bundling y servidor de desarrollo rápido.
JavaScript (ES6+) Lenguaje principal para lógica y componentes.
CSS Estilos para la presentación visual.
NPM Gestión de dependencias y scripts.
Git Control de versiones.

## Scripts disponibles

Desde la carpeta raíz del proyecto, puedes usar:

npm install
Para instalar dependencias.

npm run dev
Levanta el servidor de desarrollo con recarga en caliente.

npm run build
Construye el proyecto para producción en la carpeta dist.

npm run preview
Previsualiza la versión de producción localmente.

## Funcionalidades principales

Visualización de perfiles en tarjetas (cards) con imagen, nombre y descripción.
Añadir nuevos perfiles mediante formulario.
Editar perfil y avatar de usuario.
Dar "like" y eliminar tarjetas.
Mostrar imágenes en popup con posibilidad de cerrar con clic fuera, botón o tecla Escape.
Manejo adecuado del estado con React Hooks.
Estructura modular con componentes claros y reutilizables.

## Cómo contribuir

Clona el repositorio.
Instala dependencias con npm install.
Crea una rama para tu feature o fix: git checkout -b mi-rama.
Realiza tus cambios.
Haz commit y push.
Abre un Pull Request para revisión.
