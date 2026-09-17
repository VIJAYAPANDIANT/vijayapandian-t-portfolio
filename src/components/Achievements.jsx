import React, { useState } from 'react';
import { Trophy, Binary, Award, Rocket } from 'lucide-react';
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
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-subtitle">{item.subtitle}</div>
                <p className="achievement-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
