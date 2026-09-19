import React from 'react';
import {
  Globe,
  Atom,
  Bug,
  MonitorSmartphone,
  Smartphone,
  Palette,
  Image,
  ArrowRight,
  Sparkles,
  Check,
  LayoutDashboard
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  Globe,
  Atom,
  Bug,
  MonitorSmartphone,
  Smartphone,
  Palette,
  Image,
  LayoutDashboard
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Freelance Services</span>
          </div>
          <h2 className="section-title">Need a Website or Frontend Help?</h2>
          <p className="section-subtitle">
            I build modern, responsive websites, develop frontend interfaces, and fix website issues. I also provide creative design services for portfolios, projects, events, and personal brands.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || LayoutDashboard;
            return (
              <div key={service.id} className="glass-card service-card">
                <div className="service-icon-box">
                  <IconComponent size={22} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-deliverables">
                  {service.deliverables.map((del, idx) => (
                    <li key={idx} className="service-del-item">
                      <Check size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Client-focused CTA Banner */}
        <div className="services-cta-banner">
          <div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', fontWeight: 700, marginBottom: '8px' }}>
              Ready to Build Your Project?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.975rem' }}>
              Have a website idea, frontend issue, or design requirement? Let's discuss your project and turn your idea into a working result.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={scrollToContact}
            style={{ padding: '14px 32px', fontSize: '1rem' }}
            aria-label="Start a project - Let's work together"
          >
            <span>Let's Work Together</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
