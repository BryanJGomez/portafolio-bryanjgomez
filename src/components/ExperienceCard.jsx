import React from "react";
import BaseCard from "./ui/BaseCard";

/**
 * Componente específico para mostrar experiencia profesional
 * Encapsula toda la lógica de presentación de experiencia
 */
export default function ExperienceCard({ experience, theme, darkMode }) {
  return (
    <BaseCard theme={theme} padding="p-8" hoverEffect={true}>
      <div className="flex items-start gap-6">
        {/* Icono de la empresa */}
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
          {experience.icon}
        </div>

        <div className="flex-1">
          {/* Header con información básica */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-500">
                {experience.position}
              </h3>
              <p className={`text-xl ${theme.textSecondary}`}>
                {experience.company}
              </p>
              {experience.location && (
                <p className={`text-sm ${theme.textSecondary}`}>
                  📍 {experience.location}
                </p>
              )}
            </div>
            <div className="mt-2 lg:mt-0 flex flex-col items-start lg:items-end gap-2">
              <span
                className={`text-sm ${theme.textSecondary} ${
                  darkMode ? "bg-gray-600" : "bg-gray-100"
                } px-3 py-1 rounded-full`}
              >
                {experience.period}
              </span>
              {experience.type && (
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    experience.type === "Tiempo completo"
                      ? "bg-green-100 text-green-800"
                      : experience.type === "Freelance"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {experience.type}
                </span>
              )}
            </div>
          </div>

          {/* Descripción */}
          <p className={`${theme.textSecondary} mb-6 text-lg leading-relaxed`}>
            {experience.description}
          </p>

          {/* Logros destacados */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-green-500 mb-3 flex items-center gap-2">
                <span>🏆</span>
                Logros Destacados:
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className={`${theme.textSecondary} flex items-start gap-3`}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsabilidades clave (opcional) */}
          {experience.responsibilities &&
            experience.responsibilities.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-500 mb-3 flex items-center gap-2">
                  <span>📋</span>
                  Responsabilidades:
                </h4>
                <ul className="space-y-1">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className={`${theme.textSecondary} flex items-start gap-3 text-sm`}
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Tecnologías utilizadas */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-blue-500 mb-3">
                Tecnologías utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-2 ${
                      darkMode
                        ? "bg-blue-900/20 text-blue-200 border border-blue-800/30"
                        : "bg-blue-100 text-blue-800 border border-blue-200"
                    } rounded-full text-sm font-medium transition-colors hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseCard>
  );
}
