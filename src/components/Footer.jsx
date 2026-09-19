import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { LeetCodeIcon, CodeChefIcon, GeeksforGeeksIcon, UnstopIcon } from './BrandIcons';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Footer */}
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
              <span className="gradient-text">Portfolio</span>
            </div>
            <p className="footer-tagline">
              "Building software, learning continuously, and solving problems."
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="LeetCode"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={18} />
            </a>

            <a
              href={personalInfo.socialLinks.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="CodeChef"
              aria-label="CodeChef Profile"
            >
              <CodeChefIcon size={18} />
            </a>

            <a
              href={personalInfo.socialLinks.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="GeeksforGeeks"
              aria-label="GeeksforGeeks Profile"
            >
              <GeeksforGeeksIcon size={18} />
            </a>

            <a
              href={personalInfo.socialLinks.unstop}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              title="Unstop"
              aria-label="Unstop Profile"
            >
              <UnstopIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="btn-icon"
              title="Email"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              className="btn-icon"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
              style={{ marginLeft: '12px' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-links">
            {navItems.map((item, idx) => (
              <li key={item.label} className="footer-nav-item">
                <a
                  href={item.href}
                  className="footer-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
                {idx < navItems.length - 1 && (
                  <span className="footer-nav-dot" aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Copyright & Profile Views */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span>© 2026 {personalInfo.name}. All rights reserved.</span>
            <a
              href="https://github.com/VIJAYAPANDIANT"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Profile Views"
              aria-label="Live Profile Views"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.12)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.65)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(56, 189, 248, 0.12)';
              }}
            >
              <img
                src="https://komarev.com/ghpvc/?username=VIJAYAPANDIANT&label=PROFILE+VIEWS&color=38bdf8&style=flat-square"
                alt="Profile Views"
                style={{
                  height: '20px',
                  display: 'block'
                }}
              />
            </a>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Designed & Engineered for Performance
          </div>
        </div>
      </div>
    </footer>
  );
}
