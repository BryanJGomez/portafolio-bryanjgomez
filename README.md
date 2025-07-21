# 💼 Portafolio Personal - Bryan J. Gómez

Una aplicación web moderna y responsiva construida con React para mostrar mi experiencia profesional, habilidades técnicas y proyectos destacados.

## 🚀 Demo en Vivo

[Ver Portafolio](https://portafolio-bryanjgomez.vercel.app/)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- 🌙 **Modo Oscuro/Claro**: Alternancia de temas con Context API
- 📱 **Totalmente Responsivo**: Optimizado para dispositivos móviles y escritorio
- ⚡ **Alto Rendimiento**: Construido con React 19

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos y escalables
- **Context API** - Manejo de estado global

### Herramientas de Desarrollo

- **Create React App** - Configuración de proyecto
- **ESLint** - Linting de código
- **PostCSS & Autoprefixer** - Procesamiento de CSS

## 📋 Prerequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación y Configuración

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/BryanJGomez/portafolio-bryanjgomez.git
   cd portafolio-bryanjgomez
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm start
   ```

4. **Abre tu navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📝 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
La página se recargará automáticamente cuando hagas cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Optimiza la construcción para el mejor rendimiento.

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── profile.jpeg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── BaseCard.jsx
│   │   ├── Card.jsx
│   │   ├── EducationCard.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── TechCard.jsx
│   │   ├── TechStackSection.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── theme.js
│   ├── utils/
│   │   └── constans.js
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Temas

Los temas se gestionan a través del `ThemeContext`. Puedes personalizar los colores en:

- `src/styles/theme.js` - Configuración de temas
- `tailwind.config.js` - Configuración de Tailwind CSS
