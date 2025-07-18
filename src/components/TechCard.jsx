import React from "react";
import BaseCard from "./ui/BaseCard";

/**
 * Componente específico para mostrar tecnologías
 * Mejorado con más flexibilidad y opciones de personalización
 */
export default function TechCard({
  tech,
  theme,
  size = "default",
  showLevel = false,
  className = "",
}) {
  // Tamaños configurables
  const sizes = {
    small: {
      icon: "w-8 h-8",
      iconText: "text-sm",
      name: "text-sm font-medium",
      padding: "p-4",
    },
    default: {
      icon: "w-12 h-12",
      iconText: "text-xl",
      name: "text-lg font-semibold",
      padding: "p-6",
    },
    large: {
      icon: "w-16 h-16",
      iconText: "text-2xl",
      name: "text-xl font-bold",
      padding: "p-8",
    },
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <BaseCard theme={theme} padding={currentSize.padding} className={className}>
      <div className="flex items-center gap-4">
        {/* Icono */}
        <div
          className={`${currentSize.icon} bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-white ${currentSize.iconText} shadow-lg`}
        >
          {tech.icon}
        </div>

        <div className="flex-1">
          {/* Nombre de la tecnología */}
          <span
            className={`${currentSize.name} group-hover:text-blue-500 transition-colors ${theme.text} block`}
          >
            {tech.name}
          </span>

          {/* Nivel de experiencia (opcional) */}
          {showLevel && tech.level && (
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <div
                  className={`h-1.5 bg-gray-200 rounded-full flex-1 ${theme.bg}`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
                <span className={`text-xs ${theme.textSecondary}`}>
                  {tech.level}%
                </span>
              </div>
            </div>
          )}

          {/* Descripción corta (opcional) */}
          {tech.description && (
            <p className={`text-xs ${theme.textSecondary} mt-1 line-clamp-2`}>
              {tech.description}
            </p>
          )}
        </div>

        {/* Badge de años de experiencia (opcional) */}
        {tech.years && (
          <div className={`px-2 py-1 ${theme.alternateBg} rounded-full`}>
            <span className={`text-xs font-medium ${theme.text}`}>
              {tech.years}a
            </span>
          </div>
        )}
      </div>
    </BaseCard>
  );
}
