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
          <h2 className="section-title">Need a Website or Design?</h2>
          <p className="section-subtitle">
            I build modern websites, resolve frontend bugs, and create striking visual designs. Available for freelance web development and creative design projects.
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
              Ready to bring your project to life?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.975rem' }}>
              Whether you need a brand-new responsive portfolio, frontend feature engineering, bug fixing, or custom logo & poster designs, let's collaborate.
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
