import React from 'react';
import { Header } from './components/Layout/Header';
import { HeroSection } from './components/Sections/HeroSection';
import { AboutSection } from './components/Sections/AboutSection';
import { ProjectsSection } from './components/Sections/ProjectsSection';
import { SkillsSection } from './components/Sections/SkillsSection';
import { ContactSection } from './components/Sections/ContactSection';
import { Footer } from './components/Layout/Footer';
import { ScrollProgress } from './components/UI/ScrollProgress';
import { CursorEffect } from './components/UI/CursorEffect';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/UI/ThemeToggle';
export function App() {
  return <ThemeProvider>
      <div className="font-sans bg-[#F8F4E3] text-[#1D1E2C] dark:bg-[#0A0A0F] dark:text-[#F8F4E3] min-h-screen w-full overflow-x-hidden transition-colors duration-300">
        <CursorEffect />
        <ScrollProgress />
        <ThemeToggle />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}