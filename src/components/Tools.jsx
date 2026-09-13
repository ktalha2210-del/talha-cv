import React from 'react';
import './Tools.css';
import { TOOLS_LIST } from '../data/tools';

export default function Tools() {
  return (
    <section className="tools section" id="tools">
      <div className="container container--tools">

        {/* Header */}
        <div className="tools__header">
          <h2 className="tools__title">Tools I've Built</h2>
          <p className="tools__subtitle">
            Practical browser extensions designed to improve productivity
          </p>
        </div>

        {/* Tools Grid */}
        <div className="tools__grid">
          {TOOLS_LIST.map((tool) => (
            <a
              className="tool-card"
              key={tool.id}
              href={`#/tools/${tool.id}`}
              style={{
                '--card-accent': tool.color,
                '--card-glow': tool.glowColor,
                '--card-border': tool.borderColor,
              }}
            >
              {/* Logo Container */}
              <div className="tool-card__logo-container">
                <div className="tool-card__logo-box">
                  <img src={tool.logo} alt={tool.title} className="tool-card__logo" />
                </div>
              </div>

              {/* Content */}
              <div className="tool-card__content">
                <h3 className="tool-card__title">{tool.title}</h3>
                <p className="tool-card__desc">{tool.cardDescription}</p>
                <span className="tool-card__cta">
                  View details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
