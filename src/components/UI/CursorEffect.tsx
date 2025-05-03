import React, { useEffect, useState } from 'react';
export const CursorEffect = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
      setHidden(false);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', updatePosition);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverOn);
      link.addEventListener('mouseleave', handleLinkHoverOff);
    });
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', updatePosition);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverOn);
        link.removeEventListener('mouseleave', handleLinkHoverOff);
      });
    };
  }, []);
  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }
  return <>
      <div className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-difference ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-90' : 'scale-100'} ${linkHovered ? 'w-8 h-8 bg-[#EB6424]' : 'w-4 h-4 bg-white'} transition-all duration-150`} style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: 'translate(-50%, -50%)'
    }} />
      <div className={`fixed pointer-events-none z-[9998] rounded-full bg-white/10 ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'w-16 h-16' : 'w-10 h-10'} transition-all duration-300 ease-out`} style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: 'translate(-50%, -50%)'
    }} />
    </>;
};