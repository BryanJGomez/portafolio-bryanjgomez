import React from "react";
import BaseCard from "./ui/BaseCard";

/**
 * Componente específico para mostrar educación/formación
 * Reutilizable para certificaciones, cursos, etc.
 */
export default function EducationCard({ education, theme, darkMode }) {
  return (
    <BaseCard theme={theme} padding="p-8" hoverEffect={true}>
      <div className="flex items-start gap-6">
        {/* Icono de la institución */}
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
          {education.icon}
        </div>

        <div className="flex-1">
          {/* Header con información básica */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-green-500">
                {education.degree}
              </h3>
              <p className={`text-xl ${theme.textSecondary}`}>
                {education.institution}
              </p>
              {education.location && (
                <p className={`text-sm ${theme.textSecondary}`}>
                  📍 {education.location}
                </p>
              )}
            </div>
            <div className="mt-2 lg:mt-0 flex flex-col items-start lg:items-end gap-2">
              <span
                className={`text-sm ${theme.textSecondary} ${
                  darkMode ? "bg-gray-600" : "bg-gray-100"
                } px-3 py-1 rounded-full`}
              >
                {education.period}
              </span>
              {education.status && (
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                  {education.status}
                </span>
              )}
            </div>
          </div>
          {/* Certificaciones relacionadas (opcional) */}
          {education.certifications && education.certifications.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-yellow-500 mb-3">
                Certificaciones obtenidas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.certifications.map((cert, certIndex) => (
                  <span
                    key={certIndex}
                    className={`px-3 py-1 ${
                      darkMode
                        ? "bg-yellow-900/20 text-yellow-200 border border-yellow-800/30"
                        : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                    } rounded-full text-xs font-medium`}
                  >
                    {cert}
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
