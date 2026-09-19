import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, ExternalLink, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [lastWaUrl, setLastWaUrl] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject line.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    let waText = '';
    if (name || email || subject || message) {
      waText =
        `*New Message from Portfolio*\n\n` +
        (name ? `*Name:* ${name}\n` : '') +
        (email ? `*Email:* ${email}\n` : '') +
        (subject ? `*Subject:* ${subject}\n\n` : '') +
        (message ? `*Message:*\n${message}` : '');
    } else {
      waText = 'Hi Vijayapandian, I visited your portfolio and would like to connect with you!';
    }

    const waUrl = `https://wa.me/918610554060?text=${encodeURIComponent(waText)}`;

    // Directly open WhatsApp on same tab or trigger app without popup blocker
    window.location.href = waUrl;

    // Background sync to email
    if (email || message) {
      try {
        fetch(`https://formsubmit.co/ajax/${personalInfo.socialLinks.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name || 'Anonymous Visitor',
            email: email || 'No email specified',
            _subject: `[Portfolio WhatsApp Lead] ${subject || 'New Message'}`,
            message: message || 'Initiated chat on WhatsApp',
            _captcha: 'false',
            _template: 'table'
          })
        }).catch(() => {});
      } catch (_) {}
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            Have a project, freelance requirement, or opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Communication Channels */}
          <div className="contact-info-panel">
            <div className="glass-card contact-direct-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Direct Communication</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Feel free to connect directly via email, explore my repositories on GitHub, or expand your network on LinkedIn.
              </p>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="contact-label">Email</div>
                  <a
                    href={`mailto:${personalInfo.socialLinks.email}`}
                    className="contact-val"
                    style={{ color: 'var(--accent-sky)' }}
                  >
                    {personalInfo.socialLinks.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MessageCircle size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="contact-label">WhatsApp</div>
                  <a
                    href={personalInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                    style={{ color: 'var(--accent-sky)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>+91 8610554060</span>
                    <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Github size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="contact-label">GitHub</div>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>github.com/vijayapandiant</span>
                    <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Linkedin size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="contact-label">LinkedIn</div>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>linkedin.com/in/vijayapandiant</span>
                    <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
              </div>

              {/* Dedicated Alternative CTAs */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={personalInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#25D366',
                    justifyContent: 'center'
                  }}
                  aria-label="Chat directly on WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`mailto:${personalInfo.socialLinks.email}?subject=Project%20Inquiry`}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  aria-label="Email Vijayapandian directly"
                >
                  <Mail size={18} />
                  <span>Email Me Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Validated Contact Form */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle size={24} style={{ flexShrink: 0, marginTop: '2px', color: '#10b981' }} />
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '6px', color: '#10b981', fontSize: '1.05rem' }}>
                    Message Prepared for WhatsApp!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    WhatsApp has been opened with your message ready to send. A backup notification was also sent to <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.socialLinks.email}</strong>.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
                    {lastWaUrl && (
                      <a
                        href={lastWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                          background: '#25D366',
                          color: '#05070d',
                          fontWeight: 600,
                          padding: '8px 18px',
                          fontSize: '0.875rem'
                        }}
                      >
                        <MessageCircle size={16} />
                        <span>Send on WhatsApp</span>
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                      }}
                      style={{ padding: '8px 18px', fontSize: '0.875rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: '#fca5a5',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#ef4444' }} />
                    <div>
                      <p style={{ marginBottom: '8px' }}>{submitError}</p>
                      <a
                        href={`mailto:${personalInfo.socialLinks.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Vijayapandian,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', padding: '6px 14px', fontSize: '0.8rem' }}
                      >
                        <Mail size={14} />
                        <span>Send via Email Client</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="form-input"
                  />
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Role / Freelance Project Inquiry"
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals or role opportunity..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    style={{ minWidth: '160px' }}
                    aria-label="Send message directly to WhatsApp"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>

                  <a
                    href={`mailto:${personalInfo.socialLinks.email}`}
                    className="btn btn-secondary"
                    aria-label="Open native email client"
                  >
                    <Mail size={16} />
                    <span>Email Me</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
