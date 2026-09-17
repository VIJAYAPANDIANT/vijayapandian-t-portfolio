import React, { useState } from 'react';
import { GraduationCap, ChevronDown, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  const [showAcademicDetails, setShowAcademicDetails] = useState(false);

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong theoretical and practical grounding in Computer Science and Engineering at Easwari Engineering College.
          </p>
        </div>

        <div className="education-container">
          <div className="glass-card education-card">
            {/* Header / Main Card */}
            <div className="education-header-grid">
              <div>
                <h3 className="edu-institution">{educationData.institution}</h3>
                <div className="edu-degree">{educationData.degree}</div>
                <div className="edu-meta">
                  <span>{educationData.period}</span> • <span>{educationData.location}</span> • <span>{educationData.status}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="cgpa-pill">
                <div className="cgpa-label">CUMULATIVE CGPA</div>
                <div className="cgpa-value">{educationData.cgpa}</div>
              </div>
            </div>

            {/* Action Button: View Academic Details */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '12px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAcademicDetails(!showAcademicDetails)}
                aria-expanded={showAcademicDetails}
                aria-controls="academic-details-content"
                style={{ fontSize: '0.9rem', padding: '10px 20px' }}
              >
                <BookOpen size={16} />
                <span>{showAcademicDetails ? 'Hide Academic Details' : 'View Academic Details'}</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: showAcademicDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform var(--transition-normal)'
                  }}
                />
              </button>
            </div>

            {/* Expandable Academic Details */}
            {showAcademicDetails && (
              <div id="academic-details-content" className="academic-details-box">
                {/* Academic Highlights */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-sky)', fontFamily: 'var(--font-mono)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={16} />
                    <span>ACADEMIC HIGHLIGHTS & ACTIVITIES</span>
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {educationData.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={15} style={{ color: 'var(--accent-emerald)', marginTop: '4px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Coursework Grid */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                    CORE RELEVANT COURSEWORK
                  </h4>
                  <div className="coursework-grid">
                    {educationData.coreCoursework.map((course, idx) => (
                      <div key={idx} className="course-item">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
