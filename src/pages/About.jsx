import React from "react";
import SectionHeading from "../components/SectionHeading";
import {
  Target,
  Users,
  Lightbulb,
  Globe2,
} from "lucide-react";

export default function About() {
  const values = [
    [
      "PURPOSE",
      Target,
      "Create meaningful robotics experiences that reward curiosity and engineering.",
    ],
    [
      "COMMUNITY",
      Users,
      "Connect students, mentors, educators and volunteers across India.",
    ],
    [
      "INNOVATION",
      Lightbulb,
      "Make experimentation, creativity and problem solving central to learning.",
    ],
    [
      "GLOBAL PATHWAY",
      Globe2,
      "Help Indian teams connect with the wider RoboCup community.",
    ],
  ];

  return (
    <main className="inner-page">

      {/* =====================================================
          PAGE HERO
          ===================================================== */}

      <section className="page-hero">
        <div className="container">

          <span className="eyebrow">
            ROBOCUP INDIA
          </span>

          <h1>
            About the <em>movement.</em>
          </h1>

          <p>
            A national-facing robotics platform built around
            challenge-driven learning, teamwork and innovation.
          </p>

        </div>
      </section>


      {/* =====================================================
          OUR VISION
          ===================================================== */}

      <section className="section">
        <div className="container two-col">

          {/* About Image */}
          <div className="about-image">
            <img
              src="/images/about.jpg"
              alt="RoboCup India robotics event"
            />
          </div>


          {/* Vision Heading */}
          <div>
            <SectionHeading
              eyebrow="OUR VISION"
              title="Make robotics accessible, ambitious and meaningful."
            />
          </div>


          {/* Vision Content */}
          <div>
            <p className="lead">
              The RoboCup India experience is designed to give
              students more than a competition. It is a pathway
              to learn how real autonomous systems are designed,
              tested, documented and improved.
            </p>

            <p>
              From first prototypes to advanced challenge solving,
              teams learn through iteration. The community around
              them provides the environment to ask better questions,
              share ideas and grow.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE VALUE
          ===================================================== */}

      <section className="section dark-section">
        <div className="container">

          <SectionHeading
            eyebrow="WHAT WE VALUE"
            title="The principles behind the platform."
          />


          {/* Values Grid */}
          <div className="values-grid">

            {values.map(([title, Icon, description]) => (
              <div
                className="value-card"
                key={title}
              >

                <Icon />

                <span>
                  {title}
                </span>

                <p>
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}