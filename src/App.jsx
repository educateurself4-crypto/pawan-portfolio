import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkflowSimulator from './components/WorkflowSimulator';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} relative transition-colors duration-300 font-sans`}>
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 z-0"></div>

      {/* Main Layout Container */}
      <div className="relative z-10">
        <Navbar 
          onOpenResume={() => setIsResumeOpen(true)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <WorkflowSimulator />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
