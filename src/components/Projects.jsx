import React, { useState, useCallback } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'district',
    title: 'District',
    subtitle: 'Product Case Study',
    description:
      'How I Solved App-Bouncing & Crowd Uncertainty on the District App. A product case study exploring how user research, journey mapping, and product thinking helped identify friction in restaurant discovery and improve decision confidence.',
    tags: ['UX Research', 'Journey Mapping', 'Restaurant Discovery', 'Product Thinking'],
    color: '#FF6B35',
    imgSrc: '/images/district.jpeg',
    metrics: [
      { label: 'Focus Area', value: 'Discovery UX' },
      { label: 'Method', value: 'Journey Mapping' },
      { label: 'Type', value: 'Case Study' },
    ],
    link: 'https://d-casestudy.vercel.app/',
    linkId: 'district-casestudy-btn',
    ctaLabel: 'Visit Webpage',
    ctaIcon: 'external',
  },
  {
    id: 'zepto',
    title: 'Zepto',
    subtitle: 'Quick Commerce PRD',
    description:
      'A comprehensive Product Requirements Document for improving the Zepto quick-commerce experience. Covers user research insights, feature prioritization using RICE scoring, and detailed user stories.',
    tags: ['Quick Commerce', 'PRD', 'User Research', 'RICE Framework'],
    color: '#7c6ef7',
    imgSrc: '/images/zepto.jpg',
    metrics: [
      { label: 'Focus Area', value: 'Checkout UX' },
      { label: 'Method', value: 'RICE Scoring' },
      { label: 'Type', value: 'Full PRD' },
    ],
    link: 'https://drive.google.com/file/d/1rRnNoLCtnYPhRpfly_7BKoA5tdMprN_Q/view?usp=sharing',
    linkId: 'zepto-prd-btn',
  },
  {
    id: 'zomato',
    title: 'Zomato',
    subtitle: 'Food Delivery PRD',
    description:
      'An in-depth product document exploring improvements to the Zomato food delivery platform. Focuses on reducing order abandonment, improving discovery, and enhancing the restaurant partner experience.',
    tags: ['Food Tech', 'PRD', 'Funnel Analysis', 'A/B Testing'],
    color: '#f59e0b',
    imgSrc: '/images/zomato.png',
    metrics: [
      { label: 'Focus Area', value: 'Discovery & Retention' },
      { label: 'Method', value: 'Funnel Analysis' },
      { label: 'Type', value: 'Full PRD' },
    ],
    link: 'https://drive.google.com/file/d/1QoJYvHcABHUmVWy_f5ysrKZn3v9gp76B/view?usp=sharing',
    linkId: 'zomato-prd-btn',
  },
  {
    id: 'pharmeasy',
    title: 'PharmEasy',
    subtitle: 'Product Teardown',
    description:
      'A comprehensive product teardown analyzing the user journey, core features, and potential areas for UX improvement in the PharmEasy app.',
    tags: ['Teardown', 'HealthTech', 'UX Analysis'],
    color: '#10847E',
    imgSrc: '/images/pharmeasy.png',
    metrics: [
      { label: 'Focus Area', value: 'User Journey' },
      { label: 'Method', value: 'Teardown' },
      { label: 'Type', value: 'Analysis' },
    ],
    link: 'https://drive.google.com/file/d/1RoGQOei7lOJNQnWGEnjcaWU6DPuX6EVf/view?usp=sharing',
    linkId: 'pharmeasy-teardown-btn',
  },
  {
    id: 'netflix',
    title: 'Netflix',
    subtitle: 'Product Teardown',
    description:
      'An in-depth product teardown of the Netflix platform, exploring its recommendation engine, content discovery flow, and user engagement strategies.',
    tags: ['Teardown', 'Media', 'Growth Strategy'],
    color: '#E50914',
    imgSrc: '/images/netflix.png',
    metrics: [
      { label: 'Focus Area', value: 'Content Discovery' },
      { label: 'Method', value: 'Teardown' },
      { label: 'Type', value: 'Analysis' },
    ],
    link: 'https://drive.google.com/file/d/1jlA1I3DGoalzTLr5OCrYWptxqhq8l3_R/view?usp=sharing',
    linkId: 'netflix-teardown-btn',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="projects__bg-glow" />
      <div className="container">
        <div className="projects__header">
          <div className="section-label">Product Case Studies</div>
          <h2 className="heading-xl projects__title">
            Work that speaks<br />
            <span className="text-gradient">for itself</span>
          </h2>
          <p className="projects__subtitle text-muted">
            Real-world product documents crafted with structured thinking, user empathy, and data-backed decisions.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              className={`project-card card${hovered === p.id ? ' project-card--hovered' : ''}`}
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--card-accent': p.color, animationDelay: `${i * 0.15}s` }}
            >
              {/* Top bar */}
              <div className="project-card__top">
                <div className="project-card__icon" style={{ background: `${p.color}20`, border: `1px solid ${p.color}40`, padding: '6px' }}>
                  <img src={p.imgSrc} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} />
                </div>
                <div className="project-card__header-text">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__subtitle">{p.subtitle}</p>
                </div>
                <div className="project-card__arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="project-card__desc text-muted">{p.description}</p>

              {/* Metrics */}
              <div className="project-card__metrics">
                {p.metrics.map(m => (
                  <div className="project-card__metric" key={m.label}>
                    <span className="project-card__metric-value" style={{ color: p.color }}>{m.value}</span>
                    <span className="project-card__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="project-card__tags">
                {p.tags.map(tag => (
                  <span className="project-card__tag" key={tag}>{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                className="project-card__cta"
                id={p.linkId}
                style={{ '--btn-color': p.color }}
              >
                {p.ctaIcon === 'external' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                )}
                {p.ctaLabel || 'View Document'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </button>

              {/* Accent line */}
              <div className="project-card__accent-line" style={{ background: p.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
