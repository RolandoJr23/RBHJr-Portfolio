import React from 'react';
import { MoonStar, SunMedium, Monitor } from 'lucide-react';

const modeConfig = {
  light: {
    label: 'Light Mode',
    icon: SunMedium,
  },
  dark: {
    label: 'Dark Mode',
    icon: MoonStar,
  },
  system: {
    label: 'System',
    icon: Monitor,
  },
};

const Darkmode = ({ themeMode, isDarkMode, onToggle }) => {
  const currentMode = modeConfig[themeMode] ?? modeConfig.system;
  const Icon = currentMode.icon;
  const buttonClass = isDarkMode
    ? 'border-gray-200 bg-gray-700 text-white hover:border-gray-400'
    : 'border-gray-300 bg-gray-700 text-white hover:border-gray-500';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Theme mode: ${currentMode.label}. Click to change.`}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium  transition-all duration-300 hover:scale-[1.02] ${buttonClass}`}
    >
      <Icon className="h-4 w-4" />
      <span>{currentMode.label}</span>
    </button>
  );
};

export default Darkmode;
