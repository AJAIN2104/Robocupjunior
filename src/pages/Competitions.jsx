import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Shield, Sparkles } from "lucide-react";

export default function Competitions() {
  const competitions = [
  {
    title: "RoboCup Soccer",
    category: "SOCCER",
    description:
      "Build autonomous robots that compete on the football field using perception, control, teamwork and artificial intelligence.",
    image: "/images/soccer.jpg",
    icon: Trophy,
    tag: "AUTONOMOUS ROBOTICS",
  },

  {
    title: "RoboCup Rescue",
    category: "RESCUE LINE",
    description:
      "Design autonomous robots capable of navigating challenging environments and completing real-world rescue missions.",
    image: "/images/RESCUELINE.png",
    icon: Shield,
    tag: "SEARCH & RESCUE",
  },

  {
    title: "RoboCup Rescue Maze",
    category: "RESCUE MAZE",
    description:
      "Program robots to navigate maze environments, detect obstacles and complete challenging rescue missions autonomously.",
    image: "/images/maze.png",
    icon: Shield,
    tag: "MAZE ROBOTICS",
  },

  {
    title: "RoboCup OnStage",
    category: "ONSTAGE",
    description:
      "Combine robotics, creativity and storytelling to create an interactive autonomous performance.",
    image: "/images/onstage.jpg",
    icon: Sparkles,
    tag: "CREATIVE ROBOTICS",
  },

  {
    title: "RoboCup Simulation",
    category: "SIMULATION",
    description:
      "Develop intelligent robotic agents in a simulated environment using programming, artificial intelligence and autonomous decision making.",
    image: "/images/simulation.png",
    icon: Trophy,
    tag: "ROBOT SIMULATION",
  },
];

  return (
    <main className="inner-page">

      {/* ==================== HERO ==================== */}

      <section className="competition-page-hero">
        <div className="container">

          <span className="eyebrow">
            ROBOCUP INDIA
          </span>

          <h1>
            Build robots.
            <br />
            <em>Compete globally.</em>
          </h1>

          <p>
            Explore the RoboCupJunior competition categories and
            discover where your robotics journey can take you.
          </p>

        </div>
      </section>


      {/* ==================== COMPETITIONS ==================== */}

      <section className="section competitions-section">

        <div className="container">

          <div className="competition-intro">

            <div>

              <span className="eyebrow">
                COMPETITION CATEGORIES
              </span>

              <h2>
                Choose your
                <br />
                <em>challenge.</em>
              </h2>

            </div>

            <p>
              Each league challenges students to design, build,
              program and improve autonomous robotic systems
              through hands-on problem solving.
            </p>

          </div>


          {/* ==================== CARDS ==================== */}

          <div className="competition-large-grid">

            {competitions.map(
              ({
                title,
                category,
                description,
                image,
                icon: Icon,
                tag,
              }) => (

                <article
                  className="competition-large-card"
                  key={title}
                >

                  {/* IMAGE */}

                  <div className="competition-image">

                    <img
                      src={image}
                      alt={title}
                    />

                    <div className="competition-overlay"></div>

                    <span className="competition-tag">
                      {tag}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="competition-card-content">

                    <div className="competition-card-top">

                      <span>
                        {category}
                      </span>

                      <div className="competition-icon">
                        <Icon size={22} />
                      </div>

                    </div>


                    <h3>
                      {title}
                    </h3>


                    <p>
                      {description}
                    </p>


                    <Link
                      to="/contact"
                      className="competition-link"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================== CTA ==================== */}

      <section className="competition-cta">

        <div className="container">

          <div>

            <span className="eyebrow">
              READY TO BUILD?
            </span>

            <h2>
              Your robot.
              <br />
              <em>Your challenge.</em>
            </h2>

          </div>


          <Link
            to="/contact"
            className="btn primary"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}