import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.socialLinks.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error(data.message || 'Failed to send message via form endpoint.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitError(
        `Unable to deliver message through the online form service. You can send it directly to ${personalInfo.socialLinks.email} using the button below.`
      );
    } finally {
      setIsSubmitting(false);
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

              {/* Dedicated "Email Me" Alternative CTA */}
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={`mailto:${personalInfo.socialLinks.email}?subject=Project%20Inquiry`}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
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
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Thank you! Your message has been sent directly to{' '}
                    <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.socialLinks.email}</strong>.
                    I will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError(null);
                    }}
                    style={{ marginTop: '16px', padding: '8px 18px', fontSize: '0.875rem' }}
                  >
                    Send Another Message
                  </button>
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
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    required
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Role / Freelance Project Inquiry"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    required
                  />
                  {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals or role opportunity..."
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    required
                  ></textarea>
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                {/* Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ minWidth: '160px' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.socialLinks.email}`}
                    className="btn btn-secondary"
                    aria-label="Open native email client"
                  >
                    <Mail size={16} />
                    <span>Email Me Directly</span>
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
