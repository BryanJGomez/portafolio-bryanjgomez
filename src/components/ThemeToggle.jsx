import React, { useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { baseClasses } from "../styles/theme";

const ThemeToggle = ({ showLabel = false, variant = "button" }) => {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Componente simple de toggle (solo light/dark)
  if (variant === "simple") {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg ${baseClasses.hoverBg} ${baseClasses.transition} ${baseClasses.focusRing} focus:outline-none focus:ring-2 focus:ring-offset-2`}
        aria-label={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
        {showLabel && (
          <span className={`ml-2 ${baseClasses.textSecondary}`}>
            {isDark ? "Claro" : "Oscuro"}
          </span>
        )}
      </button>
    );
  }

  // Componente con dropdown (light/dark/system)
  const themeOptions = [
    { value: "light", label: "Claro", icon: Sun },
    { value: "dark", label: "Oscuro", icon: Moon },
    { value: "system", label: "Sistema", icon: Monitor },
  ];

  const currentOption = themeOptions.find((option) => option.value === theme);
  const CurrentIcon = currentOption?.icon || Sun;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg ${baseClasses.hoverBg} ${baseClasses.transition} ${baseClasses.focusRing} focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2`}
        aria-label="Seleccionar tema"
      >
        <CurrentIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        {showLabel && (
          <span className={`${baseClasses.textSecondary}`}>
            {currentOption?.label}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Overlay para cerrar el dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 py-2 w-48 ${baseClasses.cardBg} ${baseClasses.border} border rounded-lg ${baseClasses.shadowLg} z-20`}
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = theme === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left flex items-center gap-3 ${
                    baseClasses.hoverBg
                  } ${baseClasses.transition} ${
                    isSelected
                      ? "text-blue-600 dark:text-blue-400"
                      : baseClasses.textSecondary
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{option.label}</span>
                  {isSelected && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
