import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import ToolDetail from './components/ToolDetail';
import LinkedInPosts from './components/LinkedInPosts';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const toolMatch = hash.match(/^#\/tools\/([\w-]+)/);

  useEffect(() => {
    if (toolMatch) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace('#', '');
    const el = id && document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  return (
    <>
      {/* Subtle film grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {toolMatch ? (
          <ToolDetail toolId={toolMatch[1]} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Tools />
            <LinkedInPosts />
            <Skills />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
