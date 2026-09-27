import React, { useState, useMemo } from 'react';
import { FolderGit2, GalleryHorizontalEnd, LayoutGrid } from 'lucide-react';
import { projectCategories, projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import AccordionGallery from './AccordionGallery';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Default to grid view on mobile devices for better UX and visibility
  const [viewMode, setViewMode] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768 ? 'grid' : 'accordion'
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter((proj) =>
      proj.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // Transform projects into AccordionGallery items
  const portfolioAccordionItems = useMemo(() => {
    return filteredProjects.map((proj) => ({
      id: proj.id,
      image: proj.image,
      label: proj.title,
      link: proj.liveUrl || '#',
      githubUrl: proj.githubUrl,
      category: proj.categories ? proj.categories.join(' • ') : '',
      tagline: proj.tagline,
      technologies: proj.technologies,
      project: proj
    }));
  }, [filteredProjects]);

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

        {/* Controls: Categories & View Switcher */}
        <div className="projects-controls">
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

          {/* View Mode Switcher */}
          <div className="projects-view-toggle">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'accordion' ? 'active' : ''}`}
              onClick={() => setViewMode('accordion')}
              aria-label="Accordion Gallery View"
              title="Interactive Accordion Gallery View"
            >
              <GalleryHorizontalEnd size={14} />
              <span>Accordion Gallery</span>
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid Cards View"
              title="Traditional Grid View"
            >
              <LayoutGrid size={14} />
              <span>Grid Cards</span>
            </button>
          </div>
        </div>

        {/* Main Display: AccordionGallery or Grid */}
        {viewMode === 'accordion' ? (
          <AccordionGallery
            items={portfolioAccordionItems}
            defaultIndex={Math.min(2, Math.max(0, portfolioAccordionItems.length - 1))}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={480}
            gap={10}
            radius={16}
            orientation="horizontal"
            onItemClick={(proj) => setSelectedProject(proj)}
          />
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        )}

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

