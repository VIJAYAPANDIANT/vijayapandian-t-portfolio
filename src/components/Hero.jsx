import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Github, Linkedin } from 'lucide-react';
import { LeetCodeIcon, CodeChefIcon, GeeksforGeeksIcon, UnstopIcon } from './BrandIcons';
import { personalInfo } from '../data/personalInfo';
import ProfileCard from './ProfileCard';

const lines = [
  "Pre-Final Year CSE @ SRM Easwari",
  "Aspiring Software Development Engineer",
  "Exploring AI & Cloud Technologies",
  "Open to Collaborate & Build"
];

export default function Hero() {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const typingText = typingTextRef.current || document.getElementById("typing-text");
    if (!typingText) return;

    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId = null;

    function typeText() {
      const currentLine = lines[lineIndex];

      if (!deleting) {
        typingText.textContent = currentLine.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentLine.length) {
          deleting = true;
          timeoutId = setTimeout(typeText, 1500);
          return;
        }

        timeoutId = setTimeout(typeText, 60);
      } else {
        typingText.textContent = currentLine.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
          deleting = false;
          charIndex = 0;
          lineIndex = (lineIndex + 1) % lines.length;

          timeoutId = setTimeout(typeText, 400);
          return;
        }

        timeoutId = setTimeout(typeText, 30);
      }
    }

    typeText();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text / CTAs */}
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Engineering Roles</span>
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>{personalInfo.name}</span>
            </h1>

            <h2 className="typing-subtitle">
              <span id="typing-text" ref={typingTextRef}></span><span className="cursor">|</span>
            </h2>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
                aria-label="Explore My Work"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
                aria-label="Let's Connect"
              >
                <MessageSquare size={18} />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Secondary Profile Links */}
            <div className="hero-social-group">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="CodeChef Profile"
                aria-label="CodeChef Profile"
              >
                <CodeChefIcon size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GeeksforGeeks Profile"
                aria-label="GeeksforGeeks Profile"
              >
                <GeeksforGeeksIcon size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.unstop}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="Unstop Profile"
                aria-label="Unstop Profile"
              >
                <UnstopIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Visuals (Creative Photo Showcase) */}
          <div className="hero-visual-wrapper" style={{ position: 'relative', width: '100%', minHeight: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '340px', transform: 'scale(0.95)' }}>
              <ProfileCard 
                avatarUrl="/assets/images/vijayapandian-avatar.png"
                handle="VIJAYAPANDIANT"
                status="Available for Roles"
                showUserInfo={true}
                onContactClick={() => scrollTo('contact')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
