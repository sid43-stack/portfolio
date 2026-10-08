import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyMe } from './components/WhyMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Strengths } from './components/Strengths';
import { CareerDirection } from './components/CareerDirection';
import { HRIntroduction } from './components/HRIntroduction';
import { FAQ } from './components/FAQ';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // default to clean corporate light mode
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-tech-mesh dark:bg-[#070b14] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* 1. NAVBAR */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* MAIN CONTENT FOLLOWING EXACT HOMEPAGE FLOW */}
      <main className="flex-1">
        {/* 2. HERO */}
        <Hero />

        {/* 3. SHORT ABOUT */}
        <About />

        {/* 4. WHY I CAN ADD VALUE */}
        <WhyMe />

        {/* 5. CORE SKILLS */}
        <Skills />

        {/* 6. SELECTED PROJECTS (with interactive detail modal) */}
        <Projects />

        {/* 7. EDUCATION */}
        <Education />

        {/* 8. PROFESSIONAL STRENGTHS */}
        <Strengths />

        {/* 9. WHAT I'M LOOKING FOR */}
        <CareerDirection />

        {/* 10. QUICK HR INTRODUCTION */}
        <HRIntroduction />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. RESUME */}
        <Resume />

        {/* 13. CONTACT */}
        <Contact />
      </main>

      {/* 14. FOOTER */}
      <Footer />

      {/* FLOATING ACTION: SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
};

export default App;
