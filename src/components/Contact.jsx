import React, { useState } from 'react';
import './Contact.css';

const CONTACT_ITEMS = [
  {
    id: 'contact-email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'ktalha2210@gmail.com',
    href: 'mailto:ktalha2210@gmail.com',
    color: '#7c6ef7',
  },
  {
    id: 'contact-phone',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 97248 12655',
    href: 'tel:+919724812655',
    color: '#2dd4bf',
  },
  {
    id: 'contact-linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'talha-khan-54b716269',
    href: 'https://linkedin.com/in/talha-khan-54b716269',
    color: '#f59e0b',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ktalha2210@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__bg" />
      <div className="container">
        <div className="contact__inner">
          {/* Header */}
          <div className="contact__header">
            <div className="section-label">Get In Touch</div>
            <h2 className="heading-xl contact__title">
              Let's build something<br />
              <span className="text-gradient">great together</span>
            </h2>
            <p className="contact__subtitle text-muted">
              I'm actively looking for full-time product roles and collaborations. If you think I'd be a good fit for your team,
              I'd love to chat!
            </p>

            <div className="contact__ctas">
              <a
                href="mailto:ktalha2210@gmail.com"
                id="contact-mail-btn"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Say Hello 👋
              </a>
              <a
                href="https://drive.google.com/file/d/1p-9ibYFO8jCmdsMKbepmoPL_oW7a1vpc/view"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-cv-btn"
                className="btn-secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Contact cards */}
          <div className="contact__cards">
            {CONTACT_ITEMS.map(item => (
              <a
                key={item.id}
                href={item.href}
                id={item.id}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card card"
                style={{ '--card-color': item.color }}
              >
                <div className="contact-card__icon" style={{ color: item.color, background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                  {item.icon}
                </div>
                <div className="contact-card__text">
                  <span className="contact-card__label">{item.label}</span>
                  <span className="contact-card__value">{item.value}</span>
                </div>
                <div className="contact-card__arrow" style={{ color: item.color }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Copy email button */}
            <button
              className="contact-copy card"
              onClick={handleCopyEmail}
              id="copy-email-btn"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
