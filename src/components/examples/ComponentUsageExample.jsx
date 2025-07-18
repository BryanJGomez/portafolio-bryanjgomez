// Ejemplo de cómo actualizar tu Tests.jsx para usar los nuevos componentes

import React from "react";
import { Server, Database, Code, Cloud } from "lucide-react";
import TechStackSection from "../components/TechStackSection";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";

// Ejemplo de datos mejorados para tecnologías
const backendTechEnhanced = [
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-600 to-green-400",
    level: 90, // Porcentaje de dominio
    years: 4, // Años de experiencia
    description: "Runtime para JavaScript del lado del servidor",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "from-blue-600 to-yellow-400",
    level: 85,
    years: 3,
    description: "Lenguaje versátil para backend y análisis de datos",
  },
  // ... más tecnologías
];

// Ejemplo de datos mejorados para experiencia
const experienceEnhanced = [
  {
    position: "Senior Backend Developer",
    company: "Tech Company",
    location: "San Miguel, El Salvador",
    period: "2022 - Presente",
    type: "Tiempo completo",
    icon: "💼",
    description: "Desarrollo y mantenimiento de APIs escalables...",
    achievements: [
      "Reduje el tiempo de respuesta de la API en un 40%",
      "Implementé arquitectura de microservicios",
    ],
    responsibilities: [
      "Diseño de arquitectura de sistemas",
      "Mentoring de desarrolladores junior",
      "Code review y mejores prácticas",
    ],
    technologies: ["Node.js", "MongoDB", "Docker", "AWS"],
  },
];

// Ejemplo de datos mejorados para educación
const educationEnhanced = [
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad de El Salvador",
    location: "San Salvador, El Salvador",
    period: "2018 - 2022",
    status: "Completado",
    gpa: "8.5/10",
    icon: "🎓",
    description: "Formación integral en desarrollo de software...",
    courses: [
      "Algoritmos y Estructuras de Datos",
      "Bases de Datos",
      "Arquitectura de Software",
      "Redes de Computadoras",
    ],
    projects: [
      "Sistema de gestión académica (React + Node.js)",
      "Aplicación móvil de delivery (React Native)",
    ],
    certifications: ["AWS Cloud Practitioner", "MongoDB Developer"],
  },
];

// Ejemplo de uso en el componente principal
const ExampleUsage = ({ theme, darkMode }) => {
  return (
    <div>
      {/* Stack Tecnológico con nuevo componente */}
      <section id="tech" className={`py-20 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${theme.text}`}>
              Stack Tecnológico
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className={`${theme.textSecondary} text-lg`}>
              Tecnologías y herramientas que domino para crear soluciones
              robustas y escalables
            </p>
          </div>

          <div className="space-y-16">
            <TechStackSection
              title="Backend Development"
              icon={<Server />}
              iconColor="text-green-500"
              technologies={backendTechEnhanced}
              theme={theme}
              showLevel={true}
              cardSize="default"
            />

            <TechStackSection
              title="Bases de Datos"
              icon={<Database />}
              iconColor="text-blue-500"
              technologies={databaseTech}
              theme={theme}
              columns="lg:grid-cols-4"
              cardSize="small"
            />

            <TechStackSection
              title="Frontend Development"
              icon={<Code />}
              iconColor="text-purple-500"
              technologies={frontendTech}
              theme={theme}
            />

            <TechStackSection
              title="Cloud & DevOps"
              icon={<Cloud />}
              iconColor="text-yellow-500"
              technologies={cloudTech}
              theme={theme}
              columns="lg:grid-cols-2"
              cardSize="large"
            />
          </div>
        </div>
      </section>

      {/* Experiencia con nuevo componente */}
      <section id="experience" className={`py-20 ${theme.alternateBg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${theme.text}`}>
              Experiencia Profesional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experienceEnhanced.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                theme={theme}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Educación con nuevo componente */}
      <section className={`py-20 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${theme.text}`}>
              Formación Académica
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {educationEnhanced.map((edu, index) => (
              <EducationCard
                key={index}
                education={edu}
                theme={theme}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExampleUsage;
