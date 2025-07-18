import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { baseClasses, gradients } from "../styles/theme";
import ThemeToggle from "./ThemeToggle";

/**
 * Componente de ejemplo que demuestra el uso correcto del nuevo sistema de temas
 * Este componente muestra todas las mejores prácticas implementadas
 */
const ThemeExampleComponent = () => {
  const { isDark, theme, resolvedTheme } = useTheme();

  return (
    <div className={`min-h-screen ${baseClasses.bg} p-8`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header con información del tema actual */}
        <div
          className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
        >
          <h1 className={`text-3xl font-bold mb-4 ${baseClasses.text}`}>
            🎨 Sistema de Temas Mejorado
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className={`px-3 py-2 rounded-lg ${baseClasses.alternateBg}`}>
              <span
                className={`text-sm font-medium ${baseClasses.textSecondary}`}
              >
                Tema configurado:
              </span>
              <span className={`ml-2 font-bold ${baseClasses.text}`}>
                {theme}
              </span>
            </div>

            <div className={`px-3 py-2 rounded-lg ${baseClasses.alternateBg}`}>
              <span
                className={`text-sm font-medium ${baseClasses.textSecondary}`}
              >
                Tema resuelto:
              </span>
              <span className={`ml-2 font-bold ${baseClasses.text}`}>
                {resolvedTheme}
              </span>
            </div>

            <div className={`px-3 py-2 rounded-lg ${baseClasses.alternateBg}`}>
              <span
                className={`text-sm font-medium ${baseClasses.textSecondary}`}
              >
                Estado isDark:
              </span>
              <span className={`ml-2 font-bold ${baseClasses.text}`}>
                {isDark ? "true" : "false"}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <ThemeToggle variant="simple" showLabel={true} />
            <ThemeToggle showLabel={true} />
          </div>
        </div>

        {/* Ejemplos de componentes con el nuevo sistema */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card de ejemplo */}
          <div
            className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg} ${baseClasses.transition}`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${baseClasses.text}`}>
              📦 Card Adaptable
            </h3>
            <p className={`${baseClasses.textSecondary} mb-4`}>
              Este card se adapta automáticamente al tema seleccionado usando
              las clases base del sistema.
            </p>
            <button
              className={`${gradients.primary} text-white px-4 py-2 rounded-lg ${baseClasses.transition} hover:shadow-lg transform hover:scale-105`}
            >
              Botón con Gradiente
            </button>
          </div>

          {/* Inputs de ejemplo */}
          <div
            className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${baseClasses.text}`}>
              📝 Inputs Adaptativos
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Input adaptable"
                className={`w-full ${baseClasses.inputBg} border ${baseClasses.inputBorder} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${baseClasses.focusRing} ${baseClasses.transition} ${baseClasses.text}`}
              />
              <textarea
                placeholder="Textarea adaptable"
                rows={3}
                className={`w-full ${baseClasses.inputBg} border ${baseClasses.inputBorder} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${baseClasses.focusRing} ${baseClasses.transition} resize-none ${baseClasses.text}`}
              />
            </div>
          </div>

          {/* Lista con hover effects */}
          <div
            className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${baseClasses.text}`}>
              📋 Lista Interactiva
            </h3>
            <div className="space-y-2">
              {["Item 1", "Item 2", "Item 3"].map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${baseClasses.hoverBg} ${baseClasses.transition} cursor-pointer`}
                >
                  <span className={baseClasses.text}>{item}</span>
                  <span className={`ml-2 text-sm ${baseClasses.textSecondary}`}>
                    Con efecto hover
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradientes disponibles */}
          <div
            className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${baseClasses.text}`}>
              🌈 Gradientes Disponibles
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`${gradients.primary} h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
              >
                Primary
              </div>
              <div
                className={`${gradients.secondary} h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
              >
                Secondary
              </div>
              <div
                className={`${gradients.accent} h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
              >
                Accent
              </div>
              <div
                className={`${gradients.success} h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
              >
                Success
              </div>
            </div>
          </div>
        </div>

        {/* Código de ejemplo */}
        <div
          className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
        >
          <h3 className={`text-xl font-semibold mb-3 ${baseClasses.text}`}>
            💻 Código de Ejemplo
          </h3>
          <pre
            className={`${baseClasses.alternateBg} p-4 rounded-lg overflow-x-auto text-sm ${baseClasses.textSecondary}`}
          >
            {`// ✅ Forma correcta de usar el nuevo sistema
import { useTheme } from '../contexts/ThemeContext';
import { baseClasses, gradients } from '../styles/theme';

const MyComponent = () => {
  const { isDark } = useTheme();

  return (
    <div className={\`\${baseClasses.cardBg} \${baseClasses.text}\`}>
      <h2 className={baseClasses.text}>Mi Componente</h2>
      <button className={\`\${gradients.primary} text-white px-4 py-2 rounded-lg\`}>
        Botón
      </button>
    </div>
  );
};`}
          </pre>
        </div>

        {/* Ventajas del nuevo sistema */}
        <div
          className={`${baseClasses.cardBg} ${baseClasses.border} border rounded-xl p-6 ${baseClasses.shadowLg}`}
        >
          <h3 className={`text-xl font-semibold mb-4 ${baseClasses.text}`}>
            ✅ Ventajas del Nuevo Sistema
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">🎯</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Context API Global
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Estado compartido entre componentes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">💾</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Persistencia Automática
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Guarda preferencias en localStorage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">🔄</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Detección del Sistema
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Respeta tema del OS automáticamente
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-lg">⚡</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Mejor Performance
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Clases pre-computadas y optimizadas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-lg">🎨</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Diseño Consistente
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Mismos estilos en toda la app
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 text-lg">🛠️</span>
                <div>
                  <h4 className={`font-semibold ${baseClasses.text}`}>
                    Fácil Mantenimiento
                  </h4>
                  <p className={`text-sm ${baseClasses.textSecondary}`}>
                    Código modular y reutilizable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeExampleComponent;
