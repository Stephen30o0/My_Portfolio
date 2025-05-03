import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const {
    theme
  } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = currentScroll / totalScroll * 100;
      setScrollProgress(progress);
      setIsScrolling(true);
      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      // Set new timeout to hide the progress bar
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
      setScrollTimeout(timeout);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);
  return <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-[#1D1E2C]/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300 ${isScrolling ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-32 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#086375] via-[#EB6424] to-[#8DB580] transition-all duration-300" style={{
        width: `${scrollProgress}%`
      }} />
      </div>
      <span className="text-xs font-medium text-[#1D1E2C] dark:text-[#F8F4E3] min-w-[2.5rem] text-center">
        {Math.round(scrollProgress)}%
      </span>
    </div>;
};