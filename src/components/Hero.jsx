import React from 'react';
import { ArrowRight, MessageSquare, Github, Linkedin, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import HeroScene from './HeroScene';

export default function Hero() {
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
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="hero-role">
              <span>{personalInfo.shortRole}</span>
            </div>

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
              <span className="hero-social-label">Profiles //</span>
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
                <Code2 size={18} />
              </a>
            </div>
          </div>

          {/* Right 3D Visual */}
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
