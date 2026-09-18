import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Footer */}
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem', fontWeight: 800 }}>
              <span style={{ color: 'var(--accent-sky)', fontFamily: 'var(--font-mono)' }}>&lt;</span>
              <span>{personalInfo.brandName || 'Portfolio'}</span>
              <span style={{ color: 'var(--accent-sky)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </div>
            <p className="footer-tagline">
              "Building software, learning continuously, and solving problems."
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <Code2 size={18} />
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

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Designed & Engineered for Performance
          </div>
        </div>
      </div>
    </footer>
  );
}
