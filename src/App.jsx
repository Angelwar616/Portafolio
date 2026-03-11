import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Headers from './components/headers';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-linear-to-b from-cyan-950/5 via-transparent to-transparent pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />   
 
      <div className="relative z-10">
        
        <Headers scrollY={scrollY} />
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}