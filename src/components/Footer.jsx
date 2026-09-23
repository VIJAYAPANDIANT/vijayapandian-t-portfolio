import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { LeetCodeIcon, CodeChefIcon, GeeksforGeeksIcon, UnstopIcon } from './BrandIcons';
import { personalInfo } from '../data/personalInfo';
import PulseHeart from './PulseHeart';

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
  const [liked, setLiked] = useState(() => {
    try {
      return localStorage.getItem('portfolio_heart_liked') === 'true';
    } catch {
      return false;
    }
  });

  const [heartCount, setHeartCount] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_heart_count');
      return saved ? parseInt(saved, 10) : 1204;
    } catch {
      return 1204;
    }
  });

  const handleHeartChange = (nextLiked, nextCount) => {
    setLiked(nextLiked);
    setHeartCount(nextCount);
    try {
      localStorage.setItem('portfolio_heart_liked', String(nextLiked));
      localStorage.setItem('portfolio_heart_count', String(nextCount));
    } catch (e) {
      console.warn(e);
    }
  };

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

          {/* Reactions & Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <PulseHeart
              count={heartCount}
              defaultLiked={liked}
              onChange={handleHeartChange}
              showCount
              icon="heart"
              idleOutline
              size={40}
              corner={32}
              likedColor="#ff4d6d"
              idleColor="#8b8b93"
              pillColor="#232326"
              textColor="#f5f5f5"
              duration={560}
              dotSize={0.3}
              overshoot={1.7}
              beat={3}
              rollDuration={350}
              disabled={false}
            />

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
