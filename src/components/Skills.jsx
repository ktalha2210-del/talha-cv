import React from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Product Management',
    icon: '🎯',
    skills: [
      'PRD Writing',
      'Roadmapping',
      'User Research',
      'Feature Prioritization',
      'Stakeholder Management',
    ],
  },
  {
    category: 'Frameworks & Methods',
    icon: '⚙️',
    skills: [
      'RICE Scoring',
      'Jobs-to-be-Done',
      'Agile / Scrum',
      'OKR Setting',
      'Kano Model',
    ],
  },
];

const MY_TOOLS = [
  { name: 'Cursor', color: '#888888', icon: '/images/cursor.png' },
  { name: 'Framer', color: '#0055FF', icon: '/images/framer.jpg' },
  { name: 'Figma', color: '#F24E1E', icon: '/images/figma.png' },
  { name: 'Lovable', color: '#FF5C35', icon: '/images/lovable.png' },
  { name: 'Whimsical', color: '#8844FF', icon: '/images/whimsical.png' },
  { name: 'Claude Code', color: '#E4A982', icon: '/images/claude_code.png' },
  { name: 'Jira / Conf.', color: '#0052CC', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Mixpanel', color: '#7856FF', icon: 'https://cdn.simpleicons.org/mixpanel/7856FF' },
  { name: 'MS Clarity', color: '#00A4EF', icon: '/images/clarity.png' },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        {/* Section Header */}
        <div className="skills__header">
          <div className="section-label">Skills &amp; Expertise</div>
          <h2 className="heading-xl skills__title">
            Tools of my<br />
            <span className="text-gradient">product craft</span>
          </h2>
        </div>

        {/* Skill Group Cards */}
        <div className="skills__groups">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              className={`skills__group-card skills__group-card--${idx + 1}`}
              key={group.category}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon">{group.icon}</span>
                <h3 className="skills__group-title">{group.category}</h3>
              </div>
              <div className="skills__pills">
                {group.skills.map(skill => (
                  <span className="skills__pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="skills__divider" />

        {/* Toolkit */}
        <div className="skills__tools-container">
          <div className="skills__tools-header">
            <h3 className="skills__tools-heading">My Toolkit</h3>
            <p className="skills__tools-sub text-muted">
              Tools I use to build, ship &amp; analyse
            </p>
          </div>
          <div className="skills__tools-grid">
            {MY_TOOLS.map(tool => (
              <div
                className="skills__tool-card"
                key={tool.name}
                style={{ '--card-accent': tool.color }}
              >
                <div className="skills__tool-glow" />
                <div className="skills__tool-icon-wrapper">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="skills__tool-icon"
                  />
                </div>
                <span className="skills__tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
