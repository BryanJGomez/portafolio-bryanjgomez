import React from "react";
import TechCard from "./TechCard";

/**
 * Componente de sección para el Stack Tecnológico
 * Encapsula toda la lógica de presentación del stack técnico
 */
export default function TechStackSection({
  title,
  icon,
  iconColor,
  technologies,
  theme,
  columns = "lg:grid-cols-3",
  showLevel = false,
  cardSize = "default",
}) {
  return (
    <div className="mb-16">
      <h3
        className={`text-2xl font-semibold mb-8 flex items-center gap-3 ${theme.text}`}
      >
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
        {title}
      </h3>

      <div className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6`}>
        {technologies.map((tech, index) => (
          <TechCard
            key={tech.name || index}
            tech={tech}
            theme={theme}
            size={cardSize}
            showLevel={showLevel}
          />
        ))}
      </div>
    </div>
  );
}
