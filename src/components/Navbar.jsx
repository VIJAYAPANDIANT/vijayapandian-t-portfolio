import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll offset
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="nav-brand"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className="nav-brand-bracket">&lt;</span>
          <span>{personalInfo.name}</span>
          <span className="nav-brand-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
            aria-label="View Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
            <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <FileText size={18} />
            <span>View Resume</span>
            <ArrowUpRight size={16} />
          </a>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px' }}>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
