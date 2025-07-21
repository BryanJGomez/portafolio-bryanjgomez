const BACKEND_TECH = [
  {
    name: "Node.js",
    icon: "⚡",
    color: "from-green-500 to-green-600",
    description: "Runtime de JavaScript para el servidor",
  },
  {
    name: "Express.js",
    icon: "🚀",
    color: "from-teal-500 to-teal-600",
    description: "Framework rápido para APIs REST y aplicaciones web",
  },
  {
    name: "NestJS",
    icon: "🔥",
    color: "from-red-500 to-red-600",
    description: "Framework empresarial con arquitectura modular y TypeScript",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    color: "from-blue-600 to-blue-700",
    description: "JavaScript con tipado estático",
  },
  {
    name: "Clean Architecture",
    icon: "🏗️",
    color: "from-gray-500 to-gray-600",
    description: "Patrón de diseño para aplicaciones escalables y mantenibles",
  }
  ,
  {
    name: "Microservicios",
    icon: "🔗",
    color: "from-orange-500 to-orange-600",
    description: "Arquitectura de software que divide aplicaciones en servicios pequeños e independientes",
  }

];

const DATABASE_TECH = [
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "from-blue-500 to-blue-600",
    description: "Sistema de gestión de bases de datos relacional",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-500 to-green-600",
    description: "Base de datos NoSQL orientada a documentos",
  },
  {
    name: "Redis",
    icon: "🔴",
    color: "from-red-500 to-red-600",
    description: "Almacenamiento en memoria para caché",
  },
  {
    name: "MySQL",
    icon: "🐬",
    color: "from-orange-500 to-orange-600",
    description: "Sistema de gestión de bases de datos",
  },
  {
    name: "TypeORM",
    icon: "📊",
    color: "from-purple-500 to-purple-600",
    description: "ORM para TypeScript y JavaScript",
  },
  {
    name: "Prisma",
    icon: "⚡",
    color: "from-indigo-500 to-indigo-600",
    description: "ORM de próxima generación",
  },
];

const FRONTEND_TECH = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-blue-400 to-blue-500",
    description: "Biblioteca para interfaces de usuario",
  },
  {
    name: "React Native",
    icon: "📱",
    color: "from-blue-500 to-blue-600",
    description: "Framework para aplicaciones móviles multiplataforma",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "from-cyan-500 to-cyan-600",
    description: "Framework de CSS utility-first",
  },
];

const CLOUD_TECH = [
  {
    name: "GCP",
    icon: "☁️",
    color: "from-blue-600 to-indigo-200",
    description: "Servicios de nube de Google Cloud",
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "from-blue-500 to-blue-600",
    description: "Plataforma de contenedores",
  },
  {
    name: "GitHub Actions",
    icon: "🔧",
    color: "from-gray-600 to-gray-700",
    description: "CI/CD automatizado",
  },
  {
    name: "Bitbucket Pipelines",
    icon: "🔗",
    color: "from-gray-500 to-gray-600",
    description: "Automatización de CI/CD con Bitbucket",
  }
];

const EXPERIENCE = [
  {
    company: "Envíame",
    position: "Backend Developer",
    period: "Oct 2023 - Present",
    location: "Santiago de chile, Chile",
    type: "Tiempo completo - Remoto",
    icon: "📦",
    description:
      "Desarrollo Backend de una arquitectura de microservicios escalable que atiende a 100.000 envíos",
    achievements: [
      "Implmentación de CI/CD con Bitbucket",
      "Migración de monolito a microservicios",
      "Diseñé e implementé una integración robusta con Odoo ERP utilizando exclusivamente su API JSON-RPC.",
      "Monitoreo y optimización de rendimiento",
      "Implementación de pruebas unitarias y de integración",
    ],
    responsibilities: [
      "Diseñar y desarrollar microservicios",
      "Integrar servicios de terceros y APIs",
      "Colaborar con equipos de frontend",
      "Optimizar rendimiento y escalabilidad del sistema",
      "Realizar pruebas unitarias y de integración",
      "Documentar procesos y arquitecturas",
      "Participar en reuniones de planificación y revisión de código",
    ],
    technologies: ["Node.js", "Express.Js", "MySQL", "Docker", "clean architecture", "GCP",],
  },
  {
    company: "Hospital de Especialidades Nuestra Señora de la Paz",
    position: "Backend Developer",
    period: "Ene 2022 - Oct 2023",
    location: "San Miguel, El Salvador",
    type: "Tiempo completo",
    icon: "🏥",
    technologies: [
      "React",
      "Express.js",
      "Nest.JS",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Github Actions",
      "AWS",
      "S3"
    ],
    description:
      "Desarrolle y mantuve aplicaciones web y APIs para el sector salud, mejorando la eficiencia operativa.",
    achievements: [
      "Diseñe e implemente un servicio de mensajeria de WhatsApp para el envío de resultados de laboratorio y RX",
      "Diseñé e implementé un microservicio para facturación electrónica asegurando cumplimiento legal y optimizando procesos",
      "Sincronización de datos entre el sistema antiguo y el nuevo sistema",
    ],
    responsibilities: [
      "Liderar el desarrollo de nuevas funcionalidades",
      "Realizar revisiones de código y mentoría a desarrolladores junior",
      "Colaborar con equipos multidisciplinarios",
      "Optimizar bases de datos y consultas",
      "Mantener documentación técnica actualizada",
      "Participar en reuniones de planificación y retrospectivas",
    ],
  },
  {
    company: "SuyaNet",
    position: "FullStack Developer",
    period: "Ene 2021 - Dic 2021",
    location: "San Miguel, El Salvador",
    type: "Freelance",
    icon: "🚀",
    description:
      "Desarrollo de aplicacion web y API para administración de clinica medica",
    achievements: [
      "Desarrollo de una aplicación web para la gestión de citas médicas",
      "Implementación de un sistema de autenticación y autorización",
      "Agendamiento de citas médicas y gestión de pacientes",
      "Integración de un sistema de notificaciones por correo electrónico",
      "Implementación de cacheo de datos con Redis para mejorar el rendimiento",
      "Despliegue de la aplicación en un entorno de producción utilizando Docker",
    ],
    responsibilities: [
      "Diseñar y desarrollar la arquitectura de la aplicación",
      "Implementar la lógica de negocio y las funcionalidades requeridas",
      "Colaborar con el equipo de frontend para integrar la API",
      "Documentar la API y las funcionalidades implementadas",
      "Mantener el código limpio y seguir las mejores prácticas de desarrollo",
      "Participar en reuniones de seguimiento y planificación",
    ],
    technologies: ["React", "Nest.JS", "MySQL", "Redis", "Docker"],
  },
];

const EDUCATION = [
  {
    institution: "Universidad Gerardo Barrios",
    degree: "Ingeniería en Sistemas y Redes Informáticas",
    period: "Ene 2018 - Nov 2023",
    location: "San Miguel, El Salvador",
    status: "Completado",
    icon: "🎓",
  },
];

const PROJECTS = [
  {
    title: "Movies APP",
    description:
      "Aplicación móvil escalable para plataforma de descubrimiento de películas con datos en tiempo real, interfaz de usuario moderna e información completa sobre películas.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "TanStack Query ",
      "NativeWind",
    ],
    features: [
      "Descubrimiento de Películas",
      "Datos en Tiempo Real",
      "Interfaz Moderna",
      "Información Detallada"
    ],
    githubUrl: "https://github.com/BryanJGomez/movies-app",
  },
  {
    title: "Sistema de Gestión de Productos (Microservicios)",
    description:
      "Aplicación full-stack para gestión de productos con arquitectura de microservicios, procesamiento de pedidos y autenticación distribuida.",
    technologies: ["Node.js", "NEst.js", "NATS", "Docker", "PostgreSQL", "MongoDB", "SQLite"],
    features: [
      "Arquitectura de Microservicios",
      "Autenticación JWT",
      "Gestión de Productos",
      "Procesamiento de Pedidos",
      "Comunicación Asíncrona",
      "Contenedorización Docker",
    ],
    githubUrl: "https://github.com/BryanJGomez/products-launcher",
  },

];
const NAV_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'tech', label: 'Tecnologías' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
];

export {
  NAV_ITEMS,
  BACKEND_TECH,
  DATABASE_TECH,
  FRONTEND_TECH,
  CLOUD_TECH,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
};
