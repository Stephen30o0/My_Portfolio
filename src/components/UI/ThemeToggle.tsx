import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
export const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="fixed right-6 top-24 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:scale-110" aria-label="Toggle theme">
      {theme === 'light' ? <MoonIcon className="w-5 h-5 text-[#1D1E2C]" /> : <SunIcon className="w-5 h-5 text-[#F8F4E3]" />}
    </button>;
};