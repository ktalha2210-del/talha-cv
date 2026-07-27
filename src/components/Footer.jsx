import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__logo">
            <img src="/images/talha.jpeg" alt="TK" className="footer__logo-icon" style={{ objectFit: 'cover' }} />
            <span className="footer__logo-text">Talha Khan</span>
          </div>
          <p className="footer__tagline">
            Product Manager · Building products that matter.
          </p>
        </div>

        <div className="footer__links">
          <a href="#about" className="footer__link" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
          <a href="#projects" className="footer__link" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
          <a href="#skills" className="footer__link" onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Skills</a>
          <a href="#contact" className="footer__link" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
        </div>

        <div className="footer__socials">
          <a href="https://linkedin.com/in/talha-khan-54b716269" target="_blank" rel="noopener noreferrer" id="footer-linkedin" className="footer__social" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:ktalha2210@gmail.com" id="footer-email" className="footer__social" title="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://drive.google.com/file/d/1p-9ibYFO8jCmdsMKbepmoPL_oW7a1vpc/view?usp=sharing" target="_blank" rel="noopener noreferrer" id="footer-cv" className="footer__social" title="Resume / CV">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">© {year} Talha Khan. Crafted with 💜 and product thinking.</p>
        <p className="footer__back-top">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="back-to-top-btn" className="footer__top-btn">
            Back to top ↑
          </button>
        </p>
      </div>
    </footer>
  );
}
