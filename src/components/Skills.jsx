import React, { useState, useMemo } from 'react';
import {
  Code2,
  Terminal,
  FileCode,
  Atom,
  Layout,
  Palette,
  Braces,
  Cpu,
  Server,
  Workflow,
  Network,
  Database,
  Boxes,
  Layers,
  Sparkles,
  Bot,
  BrainCircuit,
  GitBranch,
  GitPullRequest,
  Send,
  Code,
  PenTool,
  Wrench
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';

const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Atom,
  Layout,
  Palette,
  Braces,
  Cpu,
  Server,
  Workflow,
  Network,
  Database,
  Boxes,
  Layers,
  Sparkles,
  Bot,
  BrainCircuit,
  GitBranch,
  GitPullRequest,
  Send,
  Code,
  PenTool
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skillsData;
    }
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Curated toolkit of languages, frameworks, databases, and AI tooling applied across production projects and hackathons.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="filter-container" role="tablist" aria-label="Skill Categories">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div key={skill.name} className="glass-card skill-card">
                <div className="skill-icon-wrapper">
                  <IconComponent size={22} />
                </div>
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-meta">
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
