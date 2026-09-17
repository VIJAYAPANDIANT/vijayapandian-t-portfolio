import React, { useState } from 'react';
import { Briefcase, ChevronDown, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  // Keep first one expanded by default for immediate engagement
  const [expandedId, setExpandedId] = useState('infosys');

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">Experience & Internships</h2>
          <p className="section-subtitle">
            Hands-on software development, relational database engineering, and applied artificial intelligence roles.
          </p>
        </div>

        {/* Timeline Accordion Container */}
        <div className="timeline-container">
          {experienceData.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`glass-card timeline-card ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Clickable Header Trigger */}
                <button
                  type="button"
                  className="timeline-trigger"
                  onClick={() => toggleExpand(exp.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`exp-content-${exp.id}`}
                >
                  <div className="timeline-main-info">
                    <div className="timeline-company">
                      <span>{exp.company}</span>
                      <span className="timeline-badge">{exp.badge}</span>
                    </div>

                    <div className="timeline-role">{exp.role}</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px', flexWrap: 'wrap' }}>
                      <span className="timeline-duration" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={13} />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="timeline-duration" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="accordion-icon">
                    <ChevronDown size={22} />
                  </div>
                </button>

                {/* Expanded Accordion Content */}
                {isExpanded && (
                  <div id={`exp-content-${exp.id}`} className="timeline-content">
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {exp.description}
                    </p>

                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-sky)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                        KEY RESPONSIBILITIES //
                      </h4>
                      <ul className="timeline-responsibilities">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="timeline-resp-item">
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                        TECHNOLOGIES APPLIED
                      </h4>
                      <div className="project-tech-chips" style={{ marginBottom: 0 }}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
