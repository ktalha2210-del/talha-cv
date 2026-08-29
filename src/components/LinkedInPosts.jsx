import React from 'react';
import './LinkedInPosts.css';

const LINKEDIN_POSTS = [
  {
    id: 'post-swiggy',
    url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7488690318670888960',
    postImage: 'https://media.licdn.com/dms/image/v2/D4D22AQGd3e2-ReP63g/feedshare-shrink_800/B4DZ.0sKJrJ8Ag-/0/1785442903324?e=2147483647&v=beta&t=iGg5INvhsOyNtZDnAXxVY7GqvdtgHrusIvY6V4sV14Q',
    title: 'Swiggy’s Emotional Design at Uninstall',
    content: `Swiggy just did something at the uninstall screen that I've never seen any app do.

Long press the icon to uninstall and Swiggy shows you an option to write directly to their CEO. Click it and you see a simple note that says: "My team and I go through every feedback shared here."

Then you hit next. And you write. No discount. No "please don't go" popup. Just a warm, honest message at the moment you're about to leave.`,
    tags: ['#ProductStrategy', '#CustomerEmpathy', '#UXDesign', '#Retention'],
  },
  {
    id: 'post-district',
    url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7497675322784665601',
    postImage: 'https://media.licdn.com/dms/image/v2/D4D22AQEJIoghN1Adlg/feedshare-shrink_800/B4DaA0X.HSHoAc-/0/1787585094352?e=2147483647&v=beta&t=03dXOcpVXHwTCZlDQQsq4qS4uCuOzhH7on-7HrerrYk',
    title: 'District’s Micro-Friction Fix for Group Booking',
    content: `We've all been there. A group movie plan, and then booking seats turns into its own mini negotiation. Someone screenshots the seat map, circles two seats, sends it on WhatsApp — and five replies later, you're still stuck in decision paralysis.

District just fixed this friction point. They shipped a Share Seat Map feature — instead of screenshotting and guessing, you send the live seat map to your group.`,
    tags: ['#ProductManagement', '#ProductThinking', '#UXDesign', '#CustomerEmpathy'],
  },
];

export default function LinkedInPosts() {
  return (
    <section className="linkedin-posts section" id="linkedin-posts">
      <div className="linkedin-posts__bg-glow" />
      <div className="container container--linkedin">
        
        {/* Section Header */}
        <div className="linkedin-posts__header">
          <div className="linkedin-posts__badge">
            <span className="linkedin-posts__badge-dot" />
            LINKEDIN POSTS
          </div>
          <h2 className="linkedin-posts__title">My LinkedIn Posts</h2>
          <p className="linkedin-posts__subtitle">
            Product breakdowns, strategy notes, and UX insights shared on LinkedIn.
          </p>
        </div>

        {/* 2-Column Dark Post Cards Grid */}
        <div className="linkedin-posts__grid">
          {LINKEDIN_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-card"
            >
              {/* Card Header: Author Profile Info */}
              <div className="linkedin-card__header">
                <div className="linkedin-card__author">
                  <img
                    src="/images/talha.jpeg"
                    alt="Talha Khan"
                    className="linkedin-card__avatar"
                  />
                  <div className="linkedin-card__meta">
                    <div className="linkedin-card__author-name">
                      Talha Khan
                      <span className="linkedin-card__in-badge" aria-label="LinkedIn">in</span>
                    </div>
                    <div className="linkedin-card__author-headline">
                      Product Manager
                    </div>
                  </div>
                </div>
                <div className="linkedin-card__logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                  </svg>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="linkedin-card__body">
                <p className="linkedin-card__text">
                  {post.content}
                </p>

                {/* Post Image Preview */}
                {post.postImage && (
                  <div className="linkedin-card__image-wrapper">
                    <img
                      src={post.postImage}
                      alt={post.title}
                      className="linkedin-card__image"
                    />
                  </div>
                )}

                <div className="linkedin-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="linkedin-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View on LinkedIn CTA */}
              <div className="linkedin-card__footer">
                <span className="linkedin-card__cta">
                  View full post on LinkedIn
                </span>
                <svg
                  className="linkedin-card__arrow"
                  width="16"
                  height="16"
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
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
