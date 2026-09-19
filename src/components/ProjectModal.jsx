import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, AlertCircle, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll when modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <h3 id="modal-title" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
              {project.title}
            </h3>
            <div style={{ color: 'var(--accent-sky)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
              {project.tagline}
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Problem Statement */}
          <div>
            <div className="modal-section-title">
              <AlertCircle size={16} style={{ color: '#f59e0b' }} />
              <span>Problem Statement</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {project.problem}
            </p>
          </div>

          {/* Proposed Solution */}
          <div>
            <div className="modal-section-title">
              <Sparkles size={16} style={{ color: 'var(--accent-sky)' }} />
              <span>Engineered Solution</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <div className="modal-section-title">
              <CheckCircle size={16} style={{ color: 'var(--accent-emerald)' }} />
              <span>Key Highlights & Features</span>
            </div>
            <ul className="modal-feature-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <span className="modal-feature-bullet">▸</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="modal-section-title">
              <Layers size={16} />
              <span>Technology Architecture</span>
            </div>
            <div className="project-tech-chips" style={{ marginBottom: 0 }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={project.liveUrl && project.liveUrl !== project.githubUrl ? "btn btn-secondary" : "btn btn-primary"}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github size={16} />
            <span>{project.liveUrl && project.liveUrl !== project.githubUrl ? "Source Code" : "View on GitHub"}</span>
          </a>

          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`Launch ${project.title} live demo`}
            >
              <span>Launch Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
