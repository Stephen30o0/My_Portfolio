import React, { useEffect, useState } from 'react';
import { CodeIcon, LeafIcon, PaletteIcon } from 'lucide-react';
import { AnimatedText } from '../UI/AnimatedText';
import { useTheme } from 'next-themes';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#086375]/10 dark:bg-[#086375]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#EB6424]/10 dark:bg-[#EB6424]/20 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-[#8DB580]/10 dark:bg-[#8DB580]/20 blur-3xl"></div>
      </div>
      {/* Profile Picture */}
      <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-[#086375] to-[#EB6424] rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 bg-[#F8F4E3] dark:bg-[#1D1E2C] rounded-full"></div>
          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[#F8F4E3] dark:border-[#1D1E2C]">
            {/* Local profile image */}
            <img 
              src="/images/stephen.jpg" 
              alt="Korede" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-[#EB6424] animate-pulse"></div>
          {/* Floating badges */}
          <div className="absolute -right-4 top-1/4 bg-white dark:bg-[#1D1E2C] p-3 rounded-full shadow-lg transform rotate-12 animate-float">
            <CodeIcon className="w-6 h-6 text-[#086375]" />
          </div>
          <div className="absolute -left-4 top-2/3 bg-white dark:bg-[#1D1E2C] p-3 rounded-full shadow-lg transform -rotate-12 animate-float-delayed">
            <LeafIcon className="w-6 h-6 text-[#8DB580]" />
          </div>
          <div className="absolute right-0 bottom-0 bg-white dark:bg-[#1D1E2C] p-3 rounded-full shadow-lg transform rotate-45 animate-float-slow">
            <PaletteIcon className="w-6 h-6 text-[#EB6424]" />
          </div>
        </div>
      </div>
      {/* Particle connections - simplified version */}
      <div className="absolute inset-0 -z-10">
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#1D1E2C]/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <div className="inline-flex items-center mb-6">
            <span className="text-lg md:text-xl text-[#086375] dark:text-[#86EFAC] font-medium">
              👋 Hi, I'm
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#1D1E2C] dark:text-white">
            <AnimatedText text="Olurinola Olukorede" />
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <span className="px-4 py-2 bg-[#086375] text-white rounded-full text-sm md:text-base font-medium">
              Software Engineer
            </span>
            <span className="px-4 py-2 bg-[#EB6424] text-white rounded-full text-sm md:text-base font-medium">
              Startup Founder
            </span>
            <span className="px-4 py-2 bg-[#8DB580] text-white rounded-full text-sm md:text-base font-medium">
              Sustainability Advocate
            </span>
          </div>
          {/* Focus areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12 w-full max-w-3xl mx-auto md:mx-0">
            <div className={`p-6 rounded-lg bg-white dark:bg-[#1D1E2C] shadow-lg transform transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
              transitionDelay: '200ms'
            }}>
              <div className="w-12 h-12 rounded-full bg-[#086375]/10 flex items-center justify-center mb-4">
                <CodeIcon className="w-6 h-6 text-[#086375]" />
              </div>
              <h3 className="text-lg font-bold text-[#086375] mb-2">
                Software Engineering
              </h3>
              <p className="text-sm text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70">
                Building innovative solutions with modern technologies
              </p>
            </div>
            <div className={`p-6 rounded-lg bg-white dark:bg-[#1D1E2C] shadow-lg transform transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
              transitionDelay: '400ms'
            }}>
              <div className="w-12 h-12 rounded-full bg-[#8DB580]/10 flex items-center justify-center mb-4">
                <LeafIcon className="w-6 h-6 text-[#8DB580]" />
              </div>
              <h3 className="text-lg font-bold text-[#8DB580] mb-2">
                Sustainability
              </h3>
              <p className="text-sm text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70">
                Creating eco-friendly tech solutions for a better future
              </p>
            </div>
            <div className={`p-6 rounded-lg bg-white dark:bg-[#1D1E2C] shadow-lg transform transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
              transitionDelay: '600ms'
            }}>
              <div className="w-12 h-12 rounded-full bg-[#EB6424]/10 flex items-center justify-center mb-4">
                <PaletteIcon className="w-6 h-6 text-[#EB6424]" />
              </div>
              <h3 className="text-lg font-bold text-[#EB6424] mb-2">
                Cultural Preservation
              </h3>
              <p className="text-sm text-[#1D1E2C]/70 dark:text-[#F8F4E3]/70">
                Honoring heritage through technological innovation
              </p>
            </div>
          </div>
          <div className={`mt-16 transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="px-8 py-3 bg-[#086375] text-white rounded-full hover:bg-[#086375]/90 transition-colors duration-300 flex items-center group">
              <span>Explore My Work</span>
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
