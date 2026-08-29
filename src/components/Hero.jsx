import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="home">
      {/* Decorative backgrounds */}
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--teal" />
      <div className="grid-bg" />

      <div className="container hero__inner">
        {/* Left: Text content */}
        <div className="hero__content">
          <div className="section-label animate-fade-up">
            Open to opportunities
          </div>

          <h1 className="heading-display hero__name animate-fade-up-delay-1">
            Hi, I'm{' '}
            <span className="text-gradient">Talha Khan</span>
          </h1>

          <p className="hero__title animate-fade-up-delay-2">
            <span className="hero__title-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
              Product Manager
            </span>
          </p>

          <p className="hero__description text-muted animate-fade-up-delay-3">
            I build products that solve real problems. From writing detailed PRDs to
            user research and data analysis — I bridge the gap between user needs
            and business outcomes through structured, empathetic thinking.
          </p>

          <div className="hero__ctas animate-fade-up-delay-4">
            <a
              href="#projects"
              id="hero-view-work-btn"
              className="btn-primary"
              onClick={handleScrollToProjects}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1p-9ibYFO8jCmdsMKbepmoPL_oW7a1vpc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cv-btn"
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

          <div className="hero__stats animate-fade-up-delay-5">
            <div className="hero__stat">
              <span className="hero__stat-number">3</span>
              <span className="hero__stat-label">Case Studies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">3</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Curiosity</span>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero__photo-wrap animate-fade-up-delay-3">
          <div className="hero__photo-ring" />
          <div className="hero__photo-ring hero__photo-ring--2" />
          <div className="hero__photo-container">
            <img
              src="/images/talha.jpeg"
              alt="Talha Khan – Product Manager"
              className="hero__photo"
              id="hero-profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1f35 0%, #0d1117 100%)';
                e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Outfit,sans-serif;font-size:3rem;font-weight:800;background:linear-gradient(135deg,#7c6ef7,#2dd4bf);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TK</div>';
              }}
            />
          </div>

          {/* Floating chips */}
          <div className="hero__chip hero__chip--1">
            <span>🚀</span> Product Thinking
          </div>
          <div className="hero__chip hero__chip--2">
            <span>📊</span> Data Driven
          </div>
          <div className="hero__chip hero__chip--3">
            <span>💡</span> User Empathy
          </div>
          <div className="hero__chip hero__chip--4">
            <span>🗺️</span> Roadmapping
          </div>
          <div className="hero__chip hero__chip--5">
            <span>🏃</span> Agile Delivery
          </div>
          <div className="hero__chip hero__chip--6">
            <span>🤝</span> Stakeholder Mgmt
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
