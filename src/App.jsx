import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-root">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with interactive 3D scene */}
        <Hero />

        {/* 2. About Me with stats & resume download */}
        <About />

        {/* 3. Technical Skills with category filters */}
        <Skills />

        {/* 4. Featured Projects with filters & detailed modal */}
        <Projects />

        {/* 5. Experience timeline with accordion details */}
        <Experience />

        {/* 6. Education with academic details toggle */}
        <Education />

        {/* 7. Achievements with hover animations */}
        <Achievements />

        {/* 8. Freelance & Web Development Services */}
        <Services />

        {/* 9. Contact Form & Direct Links */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
