import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'district',
    title: 'District',
    description: 'How I Solved App-Bouncing & Crowd Uncertainty on the District App',
    color: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.3)',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    imgSrc: '/images/districtlogo.png',
    useImage: true,
    link: 'https://d-casestudy.vercel.app/',
    linkId: 'district-casestudy-btn',
  },
  {
    id: 'cricbuzz',
    title: 'Cricbuzz',
    description: 'Building a Smarter Cricket Experience with AI-Powered Insights',
    color: '#00A65A',
    glowColor: 'rgba(0, 166, 90, 0.25)',
    borderColor: 'rgba(0, 166, 90, 0.35)',
    imgSrc: '/images/cricbuzzlogo.jpg',
    useImage: true,
    link: 'https://cricbuzzpage.vercel.app/',
    linkId: 'cricbuzz-casestudy-btn',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects__bg-glow" />
      <div className="container container--projects">

        {/* Header */}
        <div className="projects__header">
          <div className="projects__badge">
            <span className="projects__badge-dot" />
            CASE STUDIES
          </div>
          <h2 className="projects__title">Case studies</h2>
          <p className="projects__subtitle">
            Real-world product work solving complex user problems through research, strategy, and data-backed decisions.
          </p>
        </div>

        {/* Minimal 2-Column Grid */}
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <div
              className="case-card"
              key={p.id}
              onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
              style={{
                '--card-accent': p.color,
                '--card-glow': p.glowColor,
                '--card-border': p.borderColor,
              }}
            >
              {/* Top Logo Container */}
              <div className="case-card__logo-area">
                <div className="case-card__glow" />
                <div className="case-card__icon-squircle" style={!p.useImage ? { background: 'linear-gradient(135deg, #7E22CE 0%, #6814B8 100%)' } : {}}>
                  {p.useImage ? (
                    <img src={p.imgSrc} alt={p.title} className="case-card__img" />
                  ) : (
                    <span className="case-card__logo-text">{p.logoText}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="case-card__content">
                <h3 className="case-card__title">{p.title}</h3>
                <p className="case-card__desc">{p.description}</p>

                <div className="case-card__cta" id={p.linkId}>
                  <span>View Case Study</span>
                  <svg
                    className="case-card__arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
