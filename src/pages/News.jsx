import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function News() {
  const posts = [
    {
      category: "ROBOCUP INDIA",
      title: "Building India's next generation of robotics innovators.",
      image: "/images/news-1.svg",
    },
    {
      category: "COMPETITION",
      title:
        "How challenge-driven learning turns prototypes into autonomous systems.",
      image: "/images/news-2.svg",
    },
    {
      category: "COMMUNITY",
      title:
        "Why teamwork, documentation and technical communication matter.",
      image: "/images/news-3.svg",
    },
    {
      category: "BEGINNERS",
      title:
        "Your practical guide to starting your first RoboCupJunior project.",
      image: "/images/news-1.svg",
    },
    {
      category: "EVENTS",
      title:
        "From regional activity to a national robotics community.",
      image: "/images/news-2.svg",
    },
    {
      category: "TEAM STORIES",
      title:
        "The builders, mentors and ideas shaping the next season.",
      image: "/images/news-3.svg",
    },
  ];

  return (
    <main className="inner-page">

      {/* PAGE HERO */}
      <section className="news-page-hero">
        <div className="container">
          <span className="eyebrow">NEWS & STORIES</span>

          <h1>
            Ideas worth
            <br />
            <em>sharing.</em>
          </h1>

          <p>
            Announcements, stories and learning content for
            the growing RoboCup India robotics community.
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="section news-section">
        <div className="container">

          <div className="news-section-heading">
            <div>
              <span className="eyebrow">LATEST FROM ROBOCUP INDIA</span>

              <h2>
                What's
                <br />
                <em>happening.</em>
              </h2>
            </div>

            <p>
              Discover stories, competition updates, community
              highlights and practical robotics resources.
            </p>
          </div>

          <div className="article-grid">
            {posts.map((post, index) => (
              <article
                className="article-card"
                key={index}
              >
                <div className="article-image">
                  <img
                    src={post.image}
                    alt={post.category}
                  />

                  <span className="article-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="article-body">
                  <span className="article-category">
                    {post.category}
                  </span>

                  <h3>{post.title}</h3>

                  <a
                    href="#"
                    className="article-link"
                  >
                    Read story
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* NEWS CTA */}
      <section className="news-cta">
        <div className="container">
          <div>
            <span className="eyebrow">STAY CONNECTED</span>

            <h2>
              Follow the
              <br />
              <em>journey.</em>
            </h2>
          </div>

          <a href="#" className="btn primary">
            Explore News
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}