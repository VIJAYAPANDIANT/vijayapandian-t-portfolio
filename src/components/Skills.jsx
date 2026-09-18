import React, { useState, useMemo } from 'react';
import { Wrench, Code2 } from 'lucide-react';
import {
  JavaIcon,
  PythonIcon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
  Css3Icon,
  SpringBootIcon,
  NodejsIcon,
  ExpressIcon,
  RestApiIcon,
  MysqlIcon,
  PostgresqlIcon,
  MongodbIcon,
  OpenAiIcon,
  GeminiIcon,
  AiDevIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  VsCodeIcon,
  FigmaIcon
} from './BrandIcons';
import { skillCategories, skillsData } from '../data/skills';

const skillIconMap = {
  // Programming
  'Java': JavaIcon,
  'Python': PythonIcon,
  'JavaScript': JavaScriptIcon,

  // Frontend
  'React.js': ReactIcon,
  'HTML5': Html5Icon,
  'CSS3 / Modern CSS': Css3Icon,
  'JavaScript (ES6+)': JavaScriptIcon,

  // Backend
  'Spring Boot': SpringBootIcon,
  'Node.js': NodejsIcon,
  'Express.js': ExpressIcon,
  'REST API': RestApiIcon,

  // Database
  'MySQL': MysqlIcon,
  'PostgreSQL': PostgresqlIcon,
  'MongoDB': MongodbIcon,

  // AI
  'Generative AI': OpenAiIcon,
  'Gemini API': GeminiIcon,
  'AI Application Development': AiDevIcon,

  // Tools
  'Git': GitIcon,
  'GitHub': GithubIcon,
  'Postman': PostmanIcon,
  'VS Code': VsCodeIcon,
  'Figma': FigmaIcon
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Partition all 22 skills into 3 balanced rows for the train marquee
  const { row1, row2, row3 } = useMemo(() => {
    const r1 = skillsData.slice(0, 8);
    const r2 = skillsData.slice(8, 15);
    const r3 = skillsData.slice(15, 22);
    return { row1: r1, row2: r2, row3: r3 };
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skillsData;
    }
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const renderSkillCard = (skill, isMarquee = false, keyPrefix = '') => {
    const IconComponent = skillIconMap[skill.name] || Code2;
    return (
      <div
        key={`${keyPrefix}${skill.name}`}
        className={`glass-card ${isMarquee ? 'skill-marquee-card' : 'skill-card'}`}
      >
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
  };

  const renderMarqueeRow = (skills, duration = '30s', rowKey = '') => {
    // Duplicate skills inside group for ultra-wide screen seamless loop
    const doubled = [...skills, ...skills];
    return (
      <div className="skills-marquee-row">
        <div
          className="skills-marquee-track animate-marquee-ltr"
          style={{ animationDuration: duration }}
        >
          <div className="skills-marquee-group">
            {doubled.map((skill, idx) => renderSkillCard(skill, true, `${rowKey}-g1-${idx}-`))}
          </div>
          <div className="skills-marquee-group" aria-hidden="true">
            {doubled.map((skill, idx) => renderSkillCard(skill, true, `${rowKey}-g2-${idx}-`))}
          </div>
        </div>
      </div>
    );
  };

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

        {/* Content: 3-Row Train Marquee for 'All' or Grid for Filtered Category */}
        {activeCategory === 'All' ? (
          <div className="skills-marquee-wrapper" aria-label="Animated Technical Skills Marquee">
            {renderMarqueeRow(row1, '34s', 'row1')}
            {renderMarqueeRow(row2, '28s', 'row2')}
            {renderMarqueeRow(row3, '32s', 'row3')}
          </div>
        ) : (
          <div className="skills-grid">
            {filteredSkills.map((skill) => renderSkillCard(skill, false))}
          </div>
        )}
      </div>
    </section>
  );
}
