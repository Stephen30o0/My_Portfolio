import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1D1E2C]/90 dark:bg-[#0A0A0F]/90 text-[#F8F4E3] py-4 backdrop-blur-sm' : 'bg-transparent text-[#1D1E2C] dark:text-[#F8F4E3] py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className={`text-2xl font-bold relative ${scrolled ? 'text-[#F8F4E3]' : 'text-[#086375]'}`}>
            <span className="relative z-10">K</span>
            <span className={`absolute -top-1 -left-1 text-[#EB6424] opacity-70 z-0 transition-all duration-300 ${scrolled ? 'translate-x-1 translate-y-1' : 'translate-x-0.5 translate-y-0.5'}`}>
              K
            </span>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'projects', 'skills', 'contact'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item)} className={`relative overflow-hidden group transition-colors duration-300 ${scrolled ? 'hover:text-[#EB6424]' : 'hover:text-[#086375]'}`}>
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#EB6424]' : 'bg-[#086375]'}`}></span>
                </button>
              </li>)}
          </ul>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <XIcon size={24} className={scrolled ? 'text-[#F8F4E3]' : 'text-[#1D1E2C]'} /> : <MenuIcon size={24} className={scrolled ? 'text-[#F8F4E3]' : 'text-[#1D1E2C]'} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-[#1D1E2C] text-[#F8F4E3] py-4 shadow-lg">
          <ul className="container mx-auto px-6 space-y-4">
            {['about', 'projects', 'skills', 'contact'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item)} className="text-lg w-full text-left py-2 hover:text-[#EB6424] transition-colors duration-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>)}
          </ul>
        </div>}
    </header>;
};