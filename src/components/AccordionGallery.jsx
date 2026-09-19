import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ExternalLink, Github, Info, Sparkles } from 'lucide-react';

/**
 * AccordionGallery Component
 * Inspired by React Bits & 21st.dev
 *
 * Supports horizontal or vertical expanding panels with smooth easing,
 * 3D tilt, parallax image movement, grayscale inactive states, and rich portfolio project cards.
 */
export default function AccordionGallery({
  items = [
    { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
    { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
    { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
    { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
    { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
  ],
  defaultIndex = 2,
  expandRatio = 0.52,
  trigger = 'hover',
  accentColor = '#ffffff',
  overlayColor = '#060010',
  textColor = '#ffffff',
  grayscale = true,
  showLabels = true,
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  height = 460,
  gap = 10,
  radius = 16,
  orientation = 'horizontal',
  onItemClick = null
}) {
  // Ensure valid initial index
  const getClampedIndex = (idx, len) => {
    if (len === 0) return 0;
    return Math.max(0, Math.min(idx, len - 1));
  };

  const [activeIndex, setActiveIndex] = useState(() => getClampedIndex(defaultIndex, items.length));
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0, px: 0, py: 0 });
  const containerRef = useRef(null);

  // Synchronize when items list changes
  useEffect(() => {
    setActiveIndex((prev) => getClampedIndex(prev, items.length));
  }, [items.length]);

  // Handle tilt and parallax on pointer movement
  const handleMouseMove = useCallback(
    (e, idx) => {
      if (idx !== activeIndex) return;
      if (tilt === 0 && parallax === 0) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      setTiltValues({
        x: -ny * tilt,
        y: nx * tilt,
        px: -nx * parallax * 28,
        py: -ny * parallax * 28
      });
    },
    [activeIndex, tilt, parallax]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltValues({ x: 0, y: 0, px: 0, py: 0 });
  }, []);

  const handleInteraction = (idx) => {
    setActiveIndex(idx);
  };

  if (!items || items.length === 0) {
    return null;
  }

  // Calculate flex ratio for active vs inactive panels
  const totalItems = items.length;
  const clampedRatio = Math.max(0.2, Math.min(expandRatio, 0.9));
  const activeFlex = clampedRatio;
  const inactiveFlex = totalItems > 1 ? (1 - clampedRatio) / (totalItems - 1) : 1;

  // Power3.out cubic-bezier easing
  const easingBezier = 'cubic-bezier(0.165, 0.84, 0.44, 1)';

  return (
    <div
      ref={containerRef}
      className={`accordion-gallery-container ${orientation === 'vertical' ? 'is-vertical' : 'is-horizontal'}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        gap: `${gap}px`,
        '--accordion-radius': `${radius}px`,
        '--accordion-duration': `${duration}s`,
        '--accordion-ease': easingBezier
      }}
      role="region"
      aria-label="Accordion Project Gallery"
    >
      {items.map((item, idx) => {
        const isExpanded = idx === activeIndex;
        const currentFlex = isExpanded ? activeFlex : inactiveFlex;

        return (
          <div
            key={item.id || item.label || idx}
            className={`accordion-panel ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
            style={{
              flex: `${currentFlex} 1 0%`,
              borderRadius: `${radius}px`,
              transition: `flex ${duration}s ${easingBezier}`,
              cursor: isExpanded ? 'default' : 'pointer'
            }}
            onMouseEnter={() => {
              if (trigger === 'hover') {
                handleInteraction(idx);
              }
            }}
            onClick={() => {
              if (!isExpanded) {
                handleInteraction(idx);
              }
            }}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
            role="button"
            aria-expanded={isExpanded}
            aria-label={`${item.label} project`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleInteraction(idx);
              }
            }}
          >
            {/* 3D Tilt Container */}
            <div
              className="accordion-inner"
              style={{
                borderRadius: `${radius}px`,
                transform:
                  isExpanded && tilt > 0
                    ? `perspective(1000px) rotateX(${tiltValues.x.toFixed(2)}deg) rotateY(${tiltValues.y.toFixed(2)}deg)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: isExpanded ? 'transform 0.12s ease-out' : `transform ${duration}s ${easingBezier}`
              }}
            >
              {/* Background Image with Parallax & Grayscale */}
              <div className="accordion-image-wrapper">
                <img
                  src={item.image}
                  alt={item.label}
                  className="accordion-image"
                  style={{
                    filter: !isExpanded && grayscale ? 'grayscale(100%) brightness(0.55)' : 'grayscale(0%) brightness(1)',
                    transform:
                      isExpanded && parallax > 0
                        ? `scale(1.08) translate(${tiltValues.px.toFixed(2)}px, ${tiltValues.py.toFixed(2)}px)`
                        : 'scale(1) translate(0px, 0px)',
                    transition: `filter ${duration}s ease, transform ${isExpanded ? '0.12s ease-out' : `${duration}s ${easingBezier}`}`
                  }}
                  loading="lazy"
                />
              </div>

              {/* Tint Overlay */}
              <div
                className="accordion-overlay"
                style={{
                  backgroundColor: overlayColor,
                  opacity: isExpanded ? 0.35 : 0.65,
                  transition: `opacity ${duration}s ease`
                }}
              />

              {/* Bottom Gradient for readability */}
              <div className="accordion-gradient" />

              {/* Non-Active subtle vertical preview label (if showLabels) */}
              {!isExpanded && showLabels && (
                <div className="accordion-collapsed-label" aria-hidden="true">
                  <span className="accordion-collapsed-text">{item.label}</span>
                </div>
              )}

              {/* Expanded Card Content */}
              {isExpanded && (
                <div className="accordion-content">
                  {/* Category Badge if provided */}
                  {item.category && (
                    <div className="accordion-badge">
                      <Sparkles size={13} className="text-cyan-400" />
                      <span>{item.category}</span>
                    </div>
                  )}

                  {/* Exact screenshot bottom label: | Label */}
                  {showLabels && (
                    <div className="accordion-title-row">
                      <div
                        className="accordion-accent-bar"
                        style={{ backgroundColor: accentColor }}
                        aria-hidden="true"
                      />
                      <h3
                        className="accordion-title"
                        style={{ color: textColor }}
                      >
                        {item.label}
                      </h3>
                    </div>
                  )}

                  {/* Project Tagline / Subtitle */}
                  {item.tagline && (
                    <p className="accordion-tagline">
                      {item.tagline}
                    </p>
                  )}

                  {/* Tech stack chips */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="accordion-tech-chips">
                      {item.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="accordion-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons (Details / Demo / Code) */}
                  <div className="accordion-actions" onClick={(e) => e.stopPropagation()}>
                    {item.project && onItemClick && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => onItemClick(item.project)}
                      >
                        <Info size={14} />
                        <span>View Details</span>
                      </button>
                    )}

                    {item.link && item.link !== '#' && item.link !== item.githubUrl && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}

                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

