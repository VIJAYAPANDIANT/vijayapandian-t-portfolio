import React from 'react';
import { FileText, ArrowUpRight, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging fundamental Computer Science principles with modern full-stack development and artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Main narrative card */}
          <div className="glass-card about-card">
            <div className="about-text">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Resume Action Button */}
            {/*
              NOTE: The resume is served statically from `/assets/resume/Vijayapandian_T_Resume.pdf`.
              To update with your own resume, replace the file in `public/assets/resume/Vijayapandian_T_Resume.pdf`
              or modify the `resumePath` property in `src/data/personalInfo.js`.
            */}
            <div>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="View Resume PDF"
              >
                <FileText size={18} />
                <span>View Full Resume</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
