import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Layers,
  LayoutGrid,
  Building2,
  ExternalLink,
  Github
} from 'lucide-react';
import { experienceData, experienceCategories } from '../data/experience';

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeId, setActiveId] = useState(experienceData[0]?.id || 'career-solutions77');
  const [viewMode, setViewMode] = useState('workspace'); // 'workspace' | 'grid'
  const [expandedMobileId, setExpandedMobileId] = useState(null);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    } else {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  const showWorkspace = !isMobile && viewMode === 'workspace';

  // Filter experiences based on domain category
  const filteredExperiences = experienceData.filter((exp) =>
    selectedCategory === 'all' ? true : exp.category === selectedCategory
  );

  // Ensure activeId is always a valid item in the filtered list
  useEffect(() => {
    if (!filteredExperiences.some((exp) => exp.id === activeId) && filteredExperiences.length > 0) {
      setActiveId(filteredExperiences[0].id);
    }
  }, [selectedCategory, filteredExperiences, activeId]);

  const activeIndex = filteredExperiences.findIndex((exp) => exp.id === activeId);
  const activeExp = filteredExperiences[activeIndex] || filteredExperiences[0] || experienceData[0];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveId(filteredExperiences[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredExperiences.length - 1) {
      setActiveId(filteredExperiences[activeIndex + 1].id);
    }
  };

  const getBadgeStyle = (badge) => {
    const b = badge?.toLowerCase() || '';
    if (b.includes('current')) {
      return {
        background: 'rgba(16, 185, 129, 0.15)',
        color: 'var(--accent-emerald)',
        border: '1px solid rgba(16, 185, 129, 0.3)'
      };
    }
    if (b.includes('aicte') || b.includes('certified')) {
      return {
        background: 'rgba(245, 158, 11, 0.15)',
        color: '#fbbf24',
        border: '1px solid rgba(245, 158, 11, 0.3)'
      };
    }
    if (b.includes('green') || b.includes('sustainability')) {
      return {
        background: 'rgba(52, 211, 153, 0.15)',
        color: '#34d399',
        border: '1px solid rgba(52, 211, 153, 0.3)'
      };
    }
    if (b.includes('java')) {
      return {
        background: 'rgba(99, 102, 241, 0.15)',
        color: '#818cf8',
        border: '1px solid rgba(99, 102, 241, 0.3)'
      };
    }
    if (b.includes('ui/ux')) {
      return {
        background: 'rgba(236, 72, 153, 0.15)',
        color: '#f472b6',
        border: '1px solid rgba(236, 72, 153, 0.3)'
      };
    }
    if (b.includes('cloud')) {
      return {
        background: 'rgba(14, 165, 233, 0.15)',
        color: '#38bdf8',
        border: '1px solid rgba(14, 165, 233, 0.3)'
      };
    }
    return {
      background: 'rgba(56, 189, 248, 0.12)',
      color: 'var(--accent-sky)',
      border: '1px solid rgba(56, 189, 248, 0.28)'
    };
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">Experience & Internships</h2>
          <p className="section-subtitle">
            Hands-on industry engineering across 7+ roles spanning Artificial Intelligence, backend systems, database architecture, and full-stack development.
          </p>
        </div>

        {/* Controls Bar: Category Filters + View Mode Switcher */}
        <div className="exp-controls-bar">
          {/* Domain Filter Pills */}
          <div className="exp-filters" role="tablist" aria-label="Filter experience by category">
            {experienceCategories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? experienceData.length
                  : experienceData.filter((e) => e.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`exp-filter-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span>{cat.label}</span>
                  <span className="exp-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle (Shown on Laptop and Desktop; hidden on mobile) */}
          {!isMobile && (
            <div className="exp-view-toggle">
              <button
                type="button"
                className={`exp-view-btn ${viewMode === 'workspace' ? 'active' : ''}`}
                onClick={() => setViewMode('workspace')}
                title="Interactive Master-Detail View"
                aria-label="Interactive Master-Detail View"
              >
                <Layers size={15} />
                <span>Interactive</span>
              </button>
              <button
                type="button"
                className={`exp-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Overview Grid View"
                aria-label="Overview Grid View"
              >
                <LayoutGrid size={15} />
                <span>Overview</span>
              </button>
            </div>
          )}
        </div>

        {/* VIEW MODE 1: MASTER-DETAIL INTERACTIVE WORKSPACE (Laptop only) */}
        {showWorkspace && activeExp && (
          <div className="exp-workspace glass-card">
            {/* Left Column / Mobile Horizontal Tabs: Company Navigation Rail */}
            <div className="exp-nav-rail" role="tablist" aria-label="Companies and roles">
              <div className="exp-nav-rail-header">
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {filteredExperiences.length} Roles Available
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sky)' }}>
                  {String(activeIndex + 1).padStart(2, '0')}/{String(filteredExperiences.length).padStart(2, '0')}
                </span>
              </div>

              <div className="exp-nav-list">
                {filteredExperiences.map((exp, idx) => {
                  const isActive = exp.id === activeExp.id;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      className={`exp-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveId(exp.id)}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`exp-detail-${exp.id}`}
                    >
                      <div className="exp-nav-item-indicator" />
                      <div className="exp-nav-item-content">
                        <div className="exp-nav-item-top">
                          <span className="exp-nav-company">{exp.company}</span>
                          <span
                            className="timeline-badge"
                            style={{ ...getBadgeStyle(exp.badge), fontSize: '0.7rem', padding: '1px 7px' }}
                          >
                            {exp.badge}
                          </span>
                        </div>
                        <div className="exp-nav-role">{exp.role}</div>
                        <div className="exp-nav-duration">{exp.duration}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Showcase Stage */}
            <div
              id={`exp-detail-${activeExp.id}`}
              className="exp-detail-stage"
              role="tabpanel"
              key={activeExp.id}
            >
              {/* Header Title & Company */}
              <div className="exp-stage-header">
                <div>
                  <div className="exp-stage-role-row">
                    <h3 className="exp-stage-role">{activeExp.role}</h3>
                    <span
                      className="timeline-badge"
                      style={{ ...getBadgeStyle(activeExp.badge), fontSize: '0.78rem', padding: '3px 10px' }}
                    >
                      {activeExp.badge}
                    </span>
                  </div>
                  <div className="exp-stage-company">
                    <Building2 size={16} style={{ color: 'var(--accent-sky)' }} />
                    <span>{activeExp.company}</span>
                  </div>
                </div>

                {/* Quick Switch Controls */}
                <div className="exp-nav-arrows">
                  <button
                    type="button"
                    className="exp-arrow-btn"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label="Previous experience"
                    title="Previous experience"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="exp-nav-counter">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(filteredExperiences.length).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    className="exp-arrow-btn"
                    onClick={handleNext}
                    disabled={activeIndex === filteredExperiences.length - 1}
                    aria-label="Next experience"
                    title="Next experience"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Meta Tags Row */}
              <div className="exp-stage-meta">
                <span className="exp-meta-item">
                  <Calendar size={14} style={{ color: 'var(--accent-sky)' }} />
                  <span>{activeExp.duration}</span>
                </span>
                <span className="exp-meta-item">
                  <MapPin size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span>{activeExp.location}</span>
                </span>
              </div>

              {/* Executive Summary */}
              <p className="exp-stage-desc">{activeExp.description}</p>

              {/* Responsibilities & Achievements */}
              <div className="exp-stage-section">
                <h4 className="exp-subhead">
                  KEY CONTRIBUTIONS & ACHIEVEMENTS
                </h4>
                <ul className="timeline-responsibilities">
                  {activeExp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="timeline-resp-item">
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="exp-stage-section" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: '4px' }}>
                <h4 className="exp-subhead" style={{ color: 'var(--text-muted)' }}>
                  TECHNOLOGY STACK & TOOLS
                </h4>
                <div className="project-tech-chips" style={{ marginBottom: 0 }}>
                  {activeExp.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Project Deliverables & Repositories (Placed Last after Tech Stack) */}
              {((activeExp.featuredProjects && activeExp.featuredProjects.length > 0) || activeExp.githubUrl) && (
                <div className="exp-stage-section" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: '10px' }}>
                  <h4 className="exp-subhead" style={{ color: 'var(--accent-sky)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <Github size={15} />
                    <span>FEATURED DELIVERABLES & REPOSITORIES</span>
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {activeExp.featuredProjects && activeExp.featuredProjects.length > 0 ? (
                      activeExp.featuredProjects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '14px',
                            padding: '14px 18px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(15, 23, 42, 0.75))',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            flexWrap: 'wrap'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '240px', flex: 1 }}>
                            <div
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(56, 189, 248, 0.15)',
                                border: '1px solid rgba(56, 189, 248, 0.35)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-sky)',
                                flexShrink: 0
                              }}
                            >
                              <Github size={19} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>{proj.name}</span>
                              </div>
                              {proj.description && (
                                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.45 }}>
                                  {proj.description}
                                </div>
                              )}
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            {proj.repoUrl && (
                              <a
                                href={proj.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '8px 14px',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                  borderRadius: 'var(--radius-full)',
                                  background: 'rgba(56, 189, 248, 0.15)',
                                  border: '1px solid rgba(56, 189, 248, 0.4)',
                                  color: 'var(--accent-sky)',
                                  whiteSpace: 'nowrap',
                                  textDecoration: 'none',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <Github size={13} />
                                <span>Explore Repository</span>
                                <ExternalLink size={12} />
                              </a>
                            )}
                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '8px 14px',
                                  fontSize: '0.82rem',
                                  fontWeight: 700,
                                  borderRadius: 'var(--radius-full)',
                                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.9), rgba(37, 99, 235, 0.9))',
                                  border: '1px solid rgba(56, 189, 248, 0.6)',
                                  color: '#0b1120',
                                  whiteSpace: 'nowrap',
                                  textDecoration: 'none',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <span>Live Demo</span>
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '14px',
                          padding: '14px 18px',
                          borderRadius: 'var(--radius-lg)',
                          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(15, 23, 42, 0.75))',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          flexWrap: 'wrap'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '240px', flex: 1 }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: 'var(--radius-md)',
                              background: 'rgba(56, 189, 248, 0.15)',
                              border: '1px solid rgba(56, 189, 248, 0.35)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--accent-sky)',
                              flexShrink: 0
                            }}
                          >
                            <Github size={19} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span>{activeExp.repoName || 'Internship Project Repository'}</span>
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.45 }}>
                              {activeExp.repoDescription || 'Interactive project repository with source code, documentation, and live simulation.'}
                            </div>
                          </div>
                        </div>

                        <a
                          href={activeExp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 16px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(56, 189, 248, 0.18)',
                            border: '1px solid rgba(56, 189, 248, 0.45)',
                            color: 'var(--accent-sky)',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span>Explore Repository</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW MODE 2: COMPACT GRID OVERVIEW (Always shown on mobile; toggled on desktop) */}
        {!showWorkspace && (
          <div className="exp-grid-container">
            {filteredExperiences.map((exp, idx) => {
              const isExpandedMobile = isMobile && expandedMobileId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="glass-card exp-grid-card"
                  onClick={() => {
                    if (!isMobile) {
                      setActiveId(exp.id);
                      setViewMode('workspace');
                    } else {
                      setExpandedMobileId(isExpandedMobile ? null : exp.id);
                    }
                  }}
                >
                  <div className="exp-grid-card-top">
                    <div className="exp-grid-num">0{idx + 1}</div>
                    <span
                      className="timeline-badge"
                      style={{ ...getBadgeStyle(exp.badge), fontSize: '0.72rem', padding: '2px 8px' }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="exp-grid-role">{exp.role}</h3>
                  <div className="exp-grid-company">{exp.company}</div>

                  <div className="exp-grid-meta">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <p className={`exp-grid-desc ${isExpandedMobile ? 'is-expanded' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Expanded details on mobile: Responsibilities & Deliverables */}
                  {isExpandedMobile && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sky)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.5px' }}>
                          KEY RESPONSIBILITIES & CONTRIBUTIONS
                        </div>
                        <ul className="timeline-responsibilities" style={{ paddingLeft: '4px' }}>
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="timeline-resp-item" style={{ fontSize: '0.82rem', marginBottom: '6px' }}>
                              <CheckCircle2
                                size={14}
                                style={{ color: 'var(--accent-emerald)', marginTop: '2px', flexShrink: 0 }}
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {((exp.featuredProjects && exp.featuredProjects.length > 0) || exp.githubUrl) && (
                        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sky)', fontWeight: 600, marginBottom: '8px' }}>
                            DELIVERABLES & CODEBASE
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {exp.featuredProjects && exp.featuredProjects.length > 0 ? (
                              exp.featuredProjects.map((p, pIdx) => (
                                <div key={pIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '10px', borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{p.name}</span>
                                  <div style={{ display: 'flex', gap: '6px' }}>
                                    {p.githubUrl && (
                                      <a
                                        href={p.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="btn btn-sm"
                                        style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', color: 'var(--accent-sky)' }}
                                      >
                                        <Github size={12} />
                                        <span>Repo</span>
                                      </a>
                                    )}
                                    {p.liveUrl && (
                                      <a
                                        href={p.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="btn btn-sm"
                                        style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.9), rgba(37, 99, 235, 0.9))', color: '#0b1120', fontWeight: 700 }}
                                      >
                                        <span>Live</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))
                            ) : exp.githubUrl ? (
                              <a
                                href={exp.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="btn btn-sm"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', padding: '6px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', color: 'var(--accent-sky)', width: 'fit-content' }}
                              >
                                <Github size={13} />
                                <span>Explore Repository</span>
                                <ExternalLink size={12} />
                              </a>
                            ) : null}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="exp-grid-tech">
                    {exp.technologies.slice(0, isExpandedMobile ? undefined : 3).map((tech) => (
                      <span key={tech} className="tech-chip" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                        {tech}
                      </span>
                    ))}
                    {!isExpandedMobile && exp.technologies.length > 3 && (
                      <span className="tech-chip" style={{ fontSize: '0.72rem', padding: '2px 8px', opacity: 0.7 }}>
                        +{exp.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="exp-grid-footer">
                    <span>{isExpandedMobile ? 'Show Less' : 'View Details'}</span>
                    {!isExpandedMobile && (exp.githubUrl || exp.featuredProjects?.length > 0) && (
                      <span style={{ marginLeft: 'auto', marginRight: '6px', display: 'inline-flex', alignItems: 'center', gap: '4px', opacity: 0.85, color: 'var(--accent-sky)' }}>
                        <Github size={12} />
                        <span style={{ fontSize: '0.72rem' }}>Repo</span>
                      </span>
                    )}
                    <ChevronRight size={14} style={{ transform: isExpandedMobile ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease' }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Fast-Facts Banner */}
        <div className="exp-summary-banner glass-card">
          <div className="exp-summary-content">
            <div className="exp-summary-icon">
              <Sparkles size={20} style={{ color: 'var(--accent-sky)' }} />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                7+ Industry Roles & Technical Internships Completed
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Demonstrated real-world experience across Generative AI, Java / Spring Boot, React, and Relational Database Systems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

