import React from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div 
      className="glass-card project-card"
      onClick={() => onOpenModal(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Visual Image / Banner */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`${project.title} Preview graphic`}
          className="project-image"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="project-card-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 className="project-card-title">{project.title}</h3>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Info size={14} /> Details
          </span>
        </div>

        <div className="project-card-tagline">{project.tagline}</div>
        <p className="project-card-desc">{project.shortDescription}</p>

        {/* Tech Chips */}
        <div className="project-tech-chips">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && project.liveUrl !== project.githubUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              aria-label={`Live Demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          ) : null}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={project.liveUrl && project.liveUrl !== project.githubUrl ? "btn btn-secondary" : "btn btn-primary"}
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            aria-label={`GitHub Repository for ${project.title}`}
          >
            <Github size={15} />
            <span>{project.liveUrl && project.liveUrl !== project.githubUrl ? "GitHub" : "View on GitHub"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
