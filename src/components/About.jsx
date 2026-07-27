import React from 'react';
import './About.css';

const TRAITS = [
  { icon: '🎯', title: 'Problem-First Mindset', desc: 'I start with user pain points and work backwards to craft products that truly matter.' },
  { icon: '📐', title: 'Structured Thinking', desc: 'Every decision is backed by frameworks — from RICE scoring to Jobs-to-be-Done.' },
  { icon: '🔭', title: 'Systems Thinker', desc: 'I look at the full picture — business impact, tech constraints, and user delight.' },
  { icon: '📣', title: 'Clear Communicator', desc: 'PRDs, roadmaps, and decks that stakeholders actually read and understand.' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__inner">
          {/* Left: Text */}
          <div className="about__text">
            <div className="section-label">About Me</div>
            <h2 className="heading-xl about__heading">
              Bridging user needs<br />
              with <span className="text-gradient">business goals</span>
            </h2>
            <p className="about__para text-muted">
              Business Analyst with 3 years of experience delivering SaaS products
              across web and mobile platforms, with hands-on involvement in product
              management. Skilled in product discovery, requirement gathering,
              stakeholder management, and Agile delivery — working closely with
              engineering, design, and business teams to turn complex needs into
              clear, actionable solutions.
            </p>
            <p className="about__para text-muted">
              My journey into product management has been driven by a relentless
              curiosity about <em>why</em> people use products, and <em>how</em> we can
              make those experiences better. I've worked on case studies across
              quick commerce (Zepto), food delivery (Zomato), and consumer apps
              (Everything Pets) — each sharpening my product instincts.
            </p>

            <div className="about__links">
              <a
                href="https://linkedin.com/in/talha-khan-54b716269"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-link"
                id="about-linkedin-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:ktalha2210@gmail.com"
                className="about__social-link"
                id="about-email-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </a>
            </div>
          </div>

          {/* Right: Trait cards */}
          <div className="about__traits">
            {TRAITS.map((t, i) => (
              <div className="about__trait-card card" key={t.title} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about__trait-icon">{t.icon}</div>
                <h3 className="heading-md about__trait-title">{t.title}</h3>
                <p className="about__trait-desc text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
