// Colores y estilos para el tema claro y oscuro
export const themeConfig = {
  light: {
    // Backgrounds
    bg: 'bg-gray-50',
    cardBg: 'bg-white',
    alternateBg: 'bg-gray-100',
    navBg: 'bg-white/95',
    inputBg: 'bg-gray-50',

    // Text colors
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',

    // Borders
    border: 'border-gray-200',
    inputBorder: 'border-gray-300',

    // Interactive states
    hoverBg: 'hover:bg-gray-100',
    focusRing: 'focus:ring-blue-500',

    // Shadows
    shadow: 'shadow-md',
    shadowLg: 'shadow-lg',
    shadowXl: 'shadow-xl',
  },
  dark: {
    // Backgrounds
    bg: 'dark:bg-gray-900',
    cardBg: 'dark:bg-gray-800',
    alternateBg: 'dark:bg-gray-800',
    navBg: 'dark:bg-gray-800/95',
    inputBg: 'dark:bg-gray-700',

    // Text colors
    text: 'dark:text-white',
    textSecondary: 'dark:text-gray-300',
    textMuted: 'dark:text-gray-400',

    // Borders
    border: 'dark:border-gray-700',
    inputBorder: 'dark:border-gray-600',

    // Interactive states
    hoverBg: 'dark:hover:bg-gray-700',
    focusRing: 'dark:focus:ring-blue-400',

    // Shadows
    shadow: 'dark:shadow-2xl',
    shadowLg: 'dark:shadow-2xl',
    shadowXl: 'dark:shadow-2xl',
  }
};

// Función helper para combinar clases de tema
export const getThemeClasses = (...classGroups) => {
  return classGroups
    .flat()
    .filter(Boolean)
    .join(' ');
};

// Clases base que se aplican a ambos temas
export const baseClasses = {
  // Backgrounds
  bg: `${themeConfig.light.bg} ${themeConfig.dark.bg}`,
  cardBg: `${themeConfig.light.cardBg} ${themeConfig.dark.cardBg}`,
  alternateBg: `${themeConfig.light.alternateBg} ${themeConfig.dark.alternateBg}`,
  navBg: `${themeConfig.light.navBg} ${themeConfig.dark.navBg}`,
  inputBg: `${themeConfig.light.inputBg} ${themeConfig.dark.inputBg}`,

  // Text colors
  text: `${themeConfig.light.text} ${themeConfig.dark.text}`,
  textSecondary: `${themeConfig.light.textSecondary} ${themeConfig.dark.textSecondary}`,
  textMuted: `${themeConfig.light.textMuted} ${themeConfig.dark.textMuted}`,

  // Borders
  border: `${themeConfig.light.border} ${themeConfig.dark.border}`,
  inputBorder: `${themeConfig.light.inputBorder} ${themeConfig.dark.inputBorder}`,

  // Interactive states
  hoverBg: `${themeConfig.light.hoverBg} ${themeConfig.dark.hoverBg}`,
  focusRing: `${themeConfig.light.focusRing} ${themeConfig.dark.focusRing}`,

  // Shadows
  shadow: `${themeConfig.light.shadow} ${themeConfig.dark.shadow}`,
  shadowLg: `${themeConfig.light.shadowLg} ${themeConfig.dark.shadowLg}`,
  shadowXl: `${themeConfig.light.shadowXl} ${themeConfig.dark.shadowXl}`,

  // Transitions
  transition: 'transition-colors duration-300 ease-in-out',
};

// Gradientes que funcionan en ambos temas
export const gradients = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
  secondary: 'bg-gradient-to-r from-green-500 to-blue-500',
  accent: 'bg-gradient-to-r from-purple-500 to-pink-500',
  success: 'bg-gradient-to-r from-green-400 to-green-600',
  warning: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  danger: 'bg-gradient-to-r from-red-500 to-red-600',
};
