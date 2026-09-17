import React from 'react';
import { UserCheck, LayoutDashboard, Bug, UploadCloud, ArrowRight, Sparkles, Check } from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  UserCheck,
  LayoutDashboard,
  Bug,
  UploadCloud
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
            <span>Freelance & Services</span>
          </div>
          <h2 className="section-title">Need a Website?</h2>
          <p className="section-subtitle">
            I build responsive websites and help improve existing web applications. Available for freelance assignments and contract projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || LayoutDashboard;
            return (
              <div key={service.id} className="glass-card service-card">
                <div className="service-icon-box">
                  <IconComponent size={24} />
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

        {/* CTA Banner */}
        <div className="services-cta-banner">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Have a project in mind or need frontend engineering assistance?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Let's discuss your timeline, technical goals, and turn your concepts into a polished, responsive web experience.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={scrollToContact}
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <span>Work With Me</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
