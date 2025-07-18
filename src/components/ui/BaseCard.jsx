import React from "react";

/**
 * Componente base reutilizable para tarjetas
 * Proporciona la estructura básica y estilos comunes
 */
export default function BaseCard({
  children,
  theme,
  className = "",
  hoverEffect = true,
  padding = "p-6",
}) {
  const hoverClasses = hoverEffect
    ? "hover:shadow-xl transition-all duration-300 hover:scale-105"
    : "transition-all duration-300";

  return (
    <div
      className={`${theme.cardBg} ${theme.border} border rounded-xl ${padding} ${hoverClasses} group ${className}`}
    >
      {children}
    </div>
  );
}
