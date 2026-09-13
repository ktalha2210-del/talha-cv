import React from 'react';
import './ToolDetail.css';
import { TOOLS_DATA } from '../data/tools';

export default function ToolDetail({ toolId }) {
  const tool = TOOLS_DATA[toolId];

  if (!tool) {
    return (
      <section className="tool-detail section">
        <div className="container">
          <p>Tool not found.</p>
          <a href="#/" className="tool-detail__back">← Back to portfolio</a>
        </div>
      </section>
    );
  }

  return (
    <section
      className="tool-detail section"
      style={{
        '--card-accent': tool.color,
        '--card-glow': tool.glowColor,
        '--card-border': tool.borderColor,
      }}
    >
      <div className="container container--tool-detail">

        <a href="#tools" className="tool-detail__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Tools
        </a>

        {/* Hero */}
        <div className="tool-detail__hero">
          <div className="tool-detail__logo-box">
            <img src={tool.logo} alt={tool.title} className="tool-detail__logo" />
          </div>
          <h1 className="tool-detail__title">{tool.title}</h1>
          <p className="tool-detail__tagline">{tool.tagline}</p>

          <a
            href={tool.downloadUrl}
            download
            className="tool-detail__download-btn"
            id={`${tool.id}-download-btn`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {tool.downloadLabel}
            <span className="tool-detail__download-size">{tool.downloadSize}</span>
          </a>
        </div>

        {/* What is it / Problem */}
        <div className="tool-detail__grid">
          <div className="tool-detail__card">
            <h2 className="tool-detail__card-title">The problem</h2>
            <p className="tool-detail__card-text">{tool.problem}</p>
          </div>
          <div className="tool-detail__card">
            <h2 className="tool-detail__card-title">What it is</h2>
            <p className="tool-detail__card-text">{tool.whatItIs}</p>
          </div>
        </div>

        {/* Features */}
        <div className="tool-detail__section">
          <h2 className="tool-detail__section-title">Features</h2>
          <div className="tool-detail__features">
            {tool.features.map((f) => (
              <div className="tool-detail__feature" key={f.title}>
                <h3 className="tool-detail__feature-title">{f.title}</h3>
                <p className="tool-detail__feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shortcuts */}
        <div className="tool-detail__section">
          <h2 className="tool-detail__section-title">Shortcuts &amp; Usage</h2>
          <div className="tool-detail__shortcuts">
            {tool.shortcuts.map((s) => (
              <div className="tool-detail__shortcut-row" key={s.keys}>
                <code className="tool-detail__shortcut-keys">{s.keys}</code>
                <span className="tool-detail__shortcut-action">{s.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Install steps */}
        <div className="tool-detail__section">
          <h2 className="tool-detail__section-title">How to install in Chrome</h2>
          <ol className="tool-detail__steps">
            {tool.installSteps.map((step, idx) => (
              <li className="tool-detail__step" key={idx}>
                <span className="tool-detail__step-num">{idx + 1}</span>
                <span className="tool-detail__step-text">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={tool.downloadUrl}
            download
            className="tool-detail__download-btn tool-detail__download-btn--secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {tool.downloadLabel}
            <span className="tool-detail__download-size">{tool.downloadSize}</span>
          </a>
        </div>

        {/* Privacy note */}
        <div className="tool-detail__privacy">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <p>{tool.privacy}</p>
        </div>

      </div>
    </section>
  );
}
