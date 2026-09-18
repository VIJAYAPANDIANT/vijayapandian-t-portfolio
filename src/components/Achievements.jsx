import React, { useState } from 'react';
import { Trophy, Binary, Award, Rocket, ExternalLink, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const iconMap = {
  Binary,
  Trophy,
  Award,
  Rocket
};

export default function Achievements() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Milestones</span>
          </div>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-subtitle">
            Consistent dedication toward algorithmic problem solving, competitive hackathons, and software engineering.
          </p>
        </div>

        {/* Featured Showcase: VJ Achievement Universe */}
        <div className="achievement-showcase-banner glass-card">
          <div className="showcase-content">
            <div className="showcase-pill">
              <Sparkles size={14} className="accent-icon" />
              <span>Interactive Milestone Portal</span>
            </div>
            <h3 className="showcase-title">
              VJ Achievement Universe
            </h3>
            <p className="showcase-desc">
              Explore my interactive 3D universe featuring verified certificate vaults, competitive trophy room, badge wall, engineering timeline, and live achievement analytics.
            </p>
            <div className="showcase-tags">
              <span className="skill-tag">Certificate Vault</span>
              <span className="skill-tag">Trophy Room</span>
              <span className="skill-tag">Badge Wall</span>
              <span className="skill-tag">Live Analytics</span>
            </div>
          </div>
          <div className="showcase-action">
            <a
              href="https://vj-achievement-universe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Launch VJ Achievement Universe"
            >
              <span>Explore Universe</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            const isSelected = activeCard === item.id;
            return (
              <div
                key={item.id}
                className="glass-card achievement-card"
                onClick={() => setActiveCard(isSelected ? null : item.id)}
                style={{
                  transform: isSelected ? 'translateY(-6px)' : undefined,
                  borderColor: isSelected ? 'var(--accent-sky)' : undefined,
                  boxShadow: isSelected ? '0 12px 30px rgba(56, 189, 248, 0.2)' : undefined,
                  cursor: 'pointer'
                }}
                tabIndex={0}
                role="button"
                aria-label={`Achievement: ${item.title}`}
              >
                <div className="achievement-icon-box">
                  <IconComponent size={24} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                  <span className="skill-level-badge" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    [{item.badge}]
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link-icon"
                      title="Open platform in new tab"
                      aria-label="Open platform in new tab"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-subtitle">{item.subtitle}</div>
                <p className="achievement-desc">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ marginTop: '16px', width: '100%', padding: '8px 14px', fontSize: '0.85rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Portal</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
