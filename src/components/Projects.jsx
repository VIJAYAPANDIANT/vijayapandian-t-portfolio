import React, { useState, useMemo } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectCategories, projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter((proj) =>
      proj.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Engineered full-stack applications, automated testing tools, and AI decision systems built with production reliability.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-container" role="tablist" aria-label="Project Categories">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Detailed Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
