import React from "react";
import TechCard from "./TechCard";

/**
 * Componente de compatibilidad hacia atrás
 * Ahora usa el nuevo TechCard internamente
 * @deprecated Usa TechCard directamente para nuevas implementaciones
 */
export default function Card({ tech, theme, ...props }) {
  console.log("Card component rendered with tech:", tech);
  console.log("Card component rendered with theme:", theme);

  // Mantiene compatibilidad hacia atrás usando el nuevo TechCard
  return <TechCard tech={tech} theme={theme} {...props} />;
}
