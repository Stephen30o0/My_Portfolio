import React, { useEffect, useState } from 'react';
interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 100,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="inline-block w-[0.5em] h-[1.2em] bg-[#EB6424] animate-blink"></span>}
    </span>;
};