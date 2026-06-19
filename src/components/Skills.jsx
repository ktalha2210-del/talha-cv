import React from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Product Management',
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
    skills: [
      'RICE Scoring',
      'Jobs-to-be-Done',
      'Agile / Scrum',
      'OKR Setting',
      'Kano Model',
    ],
  },
];

const TOOL_BADGES = [
  'PRD Writing', 'User Research', 'Data Analysis',
  'Roadmapping', 'Figma', 'Agile',
  'RICE Scoring', 'JTBD', 'Notion',
  'Growth Strategy', 'Stakeholder Mgmt', 'Iteration',
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
        <div className="skills__header">
          <div className="section-label">Skills & Expertise</div>
          <h2 className="heading-xl skills__title">
            Tools of my<br />
            <span className="text-gradient">product craft</span>
          </h2>
        </div>

        {/* Skill groups */}
        <div className="skills__groups">
          {SKILL_GROUPS.map(group => (
            <div className="skills__group card" key={group.category}>
              <div className="skills__group-header">
                <h3 className="skills__group-title">{group.category}</h3>
              </div>
              <ul className="skills__list">
                {group.skills.map(skill => (
                  <li className="skills__list-item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* My Tools Native Section */}
        <div className="skills__tools-container">
          <h3 className="skills__tools-heading">My Tools</h3>
          <div className="skills__tools-grid">
            {MY_TOOLS.map(tool => (
              <div className="skills__tool-card card" key={tool.name} style={{ '--card-accent': tool.color }}>
                <div className="skills__tool-icon-wrapper">
                  <img src={tool.icon} alt={tool.name} className="skills__tool-icon" />
                </div>
                <span className="skills__tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tag cloud */}
        <div className="skills__tags">
          <p className="skills__tags-label text-muted">Also fluent in</p>
          <div className="skills__tag-cloud">
            {TOOL_BADGES.map(badge => (
              <span className="skills__badge" key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
