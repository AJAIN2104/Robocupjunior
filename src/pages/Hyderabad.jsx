
import React from "react";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Trophy,
  Bot,
  Route,
  Sparkles,
  ArrowUpRight,
  IndianRupee,
  CheckCircle2,
  Navigation,
} from "lucide-react";

const competitions = [
  {
    number: "01",
    title: "Rescue Line",
    description:
      "Build and program an autonomous robot to navigate a line-based rescue course and overcome obstacles.",
    icon: Route,
    color: "#ff653d",
  },
  {
    number: "02",
    title: "OnStage",
    description:
      "Combine robotics, creativity, and technology to create an engaging robotic performance.",
    icon: Sparkles,
    color: "#ffc928",
  },
  {
    number: "03",
    title: "Rescue Maze",
    description:
      "Design an autonomous robot that navigates a maze and completes rescue challenges.",
    icon: Bot,
    color: "#63b3ff",
  },
];

const venueAddress =
  "Vasavi Public School, H.No. 3-6-215, Street No. 15, AP State Housing Board, Himayathnagar (Near Urdu Hall), Hyderabad, Telangana - 500029";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(venueAddress);

export default function Hyderabad() {
  return (
    <main className="hyd-page">
      <style>{`
        .hyd-page {
          --hyd-bg: #07101c;
          --hyd-panel: #0d1b2b;
          --hyd-text: #f6f8fc;
          --hyd-muted: #a8b4c5;
          --hyd-orange: #ff653d;
          --hyd-yellow: #ffc928;
          background: #f5f6f8;
          color: #101b2a;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .hyd-page * {
          box-sizing: border-box;
        }

        .hyd-container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hyd-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 88px 0 76px;
          color: var(--hyd-text);
          background:
            radial-gradient(ellipse at 82% 18%, rgba(255,101,61,.19), transparent 34%),
            radial-gradient(ellipse at 12% 100%, rgba(46,130,220,.19), transparent 36%),
            var(--hyd-bg);
        }

        .hyd-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .17;
          background-image:
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .hyd-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          align-items: center;
          gap: 54px;
        }

        .hyd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,.19);
          background: rgba(255,255,255,.06);
          border-radius: 999px;
          padding: 9px 14px;
          color: #e9eef6;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .hyd-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--hyd-yellow);
          box-shadow: 0 0 14px rgba(255,201,40,.8);
        }

        .hyd-hero h1 {
          margin: 24px 0 18px;
          color: #fff;
          font-size: clamp(44px, 7vw, 82px);
          line-height: .99;
          letter-spacing: -3.8px;
          font-weight: 900;
        }

        .hyd-hero h1 span {
          display: block;
          color: var(--hyd-orange);
        }

        .hyd-hero-copy {
          max-width: 600px;
          color: #bdc9d8;
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
        }

        .hyd-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 30px;
        }

        .hyd-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 14px 19px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease;
        }

        .hyd-button:hover {
          transform: translateY(-2px);
        }

        .hyd-button-primary {
          color: #111827;
          background: var(--hyd-yellow);
        }

        .hyd-button-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,.24);
          background: rgba(255,255,255,.05);
        }

        .hyd-hero-art {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 330px;
        }

        .hyd-orbit {
          position: absolute;
          width: min(310px, 85%);
          aspect-ratio: 1;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 50%;
          transform: rotate(-25deg) scaleY(.75);
        }

        .hyd-orbit::before,
        .hyd-orbit::after {
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px dashed rgba(255,201,40,.28);
          border-radius: 50%;
        }

        .hyd-orbit::after {
          inset: -22px;
          border-style: solid;
          border-color: rgba(255,101,61,.2);
        }

        .hyd-robot-card {
          position: relative;
          display: grid;
          place-items: center;
          width: 220px;
          height: 230px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.17);
          background: linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.025));
          box-shadow: 0 30px 80px rgba(0,0,0,.28);
          backdrop-filter: blur(10px);
        }

        .hyd-robot-icon {
          color: var(--hyd-yellow);
          filter: drop-shadow(0 0 22px rgba(255,201,40,.24));
        }

        .hyd-art-label {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          color: #c9d5e3;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hyd-floating-tag {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 13px;
          color: #fff;
          background: #14263a;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 12px 28px rgba(0,0,0,.2);
        }

        .hyd-tag-one {
          top: 28px;
          right: 0;
        }

        .hyd-tag-two {
          bottom: 28px;
          left: 0;
        }

        .hyd-quick-info {
          position: relative;
          z-index: 2;
          margin-top: -1px;
          background: #fff;
          border-bottom: 1px solid #e5e9ef;
        }

        .hyd-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .hyd-info-item {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 25px 22px;
          border-right: 1px solid #e8ebf0;
        }

        .hyd-info-item:first-child {
          padding-left: 0;
        }

        .hyd-info-item:last-child {
          border-right: 0;
        }

        .hyd-info-icon {
          display: grid;
          flex: 0 0 46px;
          width: 46px;
          height: 46px;
          place-items: center;
          color: #f05a36;
          background: #fff0eb;
          border-radius: 13px;
        }

        .hyd-info-label {
          margin: 0 0 5px;
          color: #758093;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hyd-info-value {
          margin: 0;
          color: #111c2b;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.5;
        }

        .hyd-section {
          padding: 82px 0;
        }

        .hyd-section-heading {
          max-width: 680px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .hyd-kicker {
          color: #e65332;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hyd-section-heading h2 {
          margin: 13px 0 12px;
          color: #111c2b;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.12;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .hyd-section-heading p {
          margin: 0;
          color: #657184;
          font-size: 15px;
          line-height: 1.8;
        }

        .hyd-competition-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hyd-competition-card {
          position: relative;
          overflow: hidden;
          min-height: 270px;
          padding: 27px;
          background: #fff;
          border: 1px solid #e4e8ee;
          border-radius: 19px;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .hyd-competition-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(16,28,45,.09);
        }

        .hyd-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .hyd-card-icon {
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border-radius: 15px;
        }

        .hyd-card-number {
          color: #a8b1bf;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .hyd-competition-card h3 {
          margin: 0 0 10px;
          color: #121d2d;
          font-size: 22px;
          font-weight: 900;
        }

        .hyd-competition-card p {
          margin: 0;
          color: #687587;
          font-size: 14px;
          line-height: 1.8;
        }

        .hyd-details {
          color: #fff;
          background:
            radial-gradient(ellipse at 90% 0%, rgba(255,101,61,.15), transparent 35%),
            #091523;
        }

        .hyd-details .hyd-section-heading h2 {
          color: #fff;
        }

        .hyd-details .hyd-section-heading p {
          color: #aebacc;
        }

        .hyd-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .hyd-detail-card {
          padding: 30px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.045);
          border-radius: 20px;
        }

        .hyd-detail-card h3 {
          margin: 0 0 24px;
          font-size: 21px;
          font-weight: 900;
        }

        .hyd-fee-line {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 0;
          color: #c1ccda;
          font-size: 14px;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .hyd-fee-line strong {
          color: #fff;
          text-align: right;
        }

        .hyd-fee-total {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
          margin-top: 22px;
        }

        .hyd-total-label {
          color: #d3dbe6;
          font-size: 13px;
          font-weight: 700;
        }

        .hyd-total-amount {
          display: block;
          margin-top: 6px;
          color: var(--hyd-yellow);
          font-size: clamp(26px, 4vw, 36px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .hyd-total-note {
          margin-top: 9px;
          color: #9caabd;
          font-size: 11px;
        }

        .hyd-included {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 20px;
          color: #c4cfdd;
          font-size: 13px;
          line-height: 1.7;
        }

        .hyd-included svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--hyd-yellow);
        }

        .hyd-address {
          margin: -5px 0 22px;
          color: #c2ccda;
          font-size: 15px;
          line-height: 1.9;
        }

        .hyd-venue-note {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin: 20px 0 24px;
          color: #aebacc;
          font-size: 13px;
          line-height: 1.7;
        }

        .hyd-venue-note svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--hyd-yellow);
        }

        .hyd-cta {
          padding: 68px 0;
          background: #fff;
        }

        .hyd-cta-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 38px;
          border-radius: 22px;
          background:
            radial-gradient(ellipse at 90% 0%, rgba(255,201,40,.14), transparent 36%),
            #f0f3f7;
          border: 1px solid #e4e8ef;
        }

        .hyd-cta h2 {
          margin: 0 0 10px;
          color: #111c2b;
          font-size: clamp(25px, 4vw, 35px);
          letter-spacing: -1px;
          font-weight: 900;
        }

        .hyd-cta p {
          max-width: 650px;
          margin: 0;
          color: #657184;
          font-size: 14px;
          line-height: 1.8;
        }

        .hyd-cta .hyd-button {
          flex-shrink: 0;
          color: #fff;
          background: #111d2d;
        }

        .hyd-footer-note {
          padding: 0 0 30px;
          color: #7b8696;
          background: #fff;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 800px) {
          .hyd-hero {
            padding: 65px 0 55px;
          }

          .hyd-hero-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .hyd-hero h1 {
            letter-spacing: -2px;
          }

          .hyd-hero-art {
            min-height: 285px;
          }

          .hyd-info-grid {
            grid-template-columns: 1fr;
            padding: 10px 0;
          }

          .hyd-info-item,
          .hyd-info-item:first-child {
            padding: 15px 0;
            border-right: 0;
            border-bottom: 1px solid #e8ebf0;
          }

          .hyd-info-item:last-child {
            border-bottom: 0;
          }

          .hyd-competition-grid {
            grid-template-columns: 1fr;
          }

          .hyd-competition-card {
            min-height: auto;
          }

          .hyd-details-grid {
            grid-template-columns: 1fr;
          }

          .hyd-cta-box {
            align-items: flex-start;
            flex-direction: column;
            padding: 27px;
          }
        }

        @media (max-width: 420px) {
          .hyd-container {
            width: min(100% - 28px, 1160px);
          }

          .hyd-hero-copy {
            font-size: 15px;
          }

          .hyd-button {
            width: 100%;
          }

          .hyd-detail-card {
            padding: 22px;
          }

          .hyd-fee-line {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hyd-page *,
          .hyd-page *::before,
          .hyd-page *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* Hero section */}
      <section className="hyd-hero">
        <div className="hyd-container hyd-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hyd-eyebrow">
              <span className="hyd-eyebrow-dot" />
              RoboCup Junior India
            </div>

            <h1>
              Hyderabad
              <span>2026.</span>
            </h1>

            <p className="hyd-hero-copy">
              Think. Build. Innovate. Join young robotics enthusiasts for an
              exciting competition celebrating engineering, creativity, and
              intelligent robots.
            </p>

            <div className="hyd-hero-actions">
              <a className="hyd-button hyd-button-primary" href="#competitions">
                Explore Competitions <ArrowUpRight size={18} />
              </a>

              <a
                className="hyd-button hyd-button-secondary"
                href="#venue"
              >
                View Venue <MapPin size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hyd-hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hyd-orbit" />

            <div className="hyd-robot-card">
              <Bot
                className="hyd-robot-icon"
                size={112}
                strokeWidth={1.25}
              />
              <div className="hyd-art-label">Future Starts Here</div>
            </div>

            <div className="hyd-floating-tag hyd-tag-one">
              <Trophy size={16} color="#ffc928" />
              Robotics Challenge
            </div>

            <div className="hyd-floating-tag hyd-tag-two">
              <Sparkles size={16} color="#ff653d" />
              Imagine · Create · Compete
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key event information */}
      <section className="hyd-quick-info" aria-label="Event information">
        <div className="hyd-container hyd-info-grid">
          <div className="hyd-info-item">
            <div className="hyd-info-icon">
              <CalendarDays size={22} />
            </div>
            <div>
              <p className="hyd-info-label">Competition Date</p>
              <p className="hyd-info-value">12 December 2026</p>
            </div>
          </div>

          <div className="hyd-info-item">
            <div className="hyd-info-icon">
              <MapPin size={22} />
            </div>
            <div>
              <p className="hyd-info-label">Competition City</p>
              <p className="hyd-info-value">Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="hyd-info-item">
            <div className="hyd-info-icon">
              <IndianRupee size={22} />
            </div>
            <div>
              <p className="hyd-info-label">Registration Fee</p>
              <p className="hyd-info-value">₹8,354.40 including GST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition categories */}
      <section className="hyd-section" id="competitions">
        <div className="hyd-container">
          <div className="hyd-section-heading">
            <span className="hyd-kicker">Choose Your Challenge</span>
            <h2>Three competitions. Endless possibilities.</h2>
            <p>
              Discover the challenges where young innovators can put their
              robotics, programming, teamwork, and creative skills to the test.
            </p>
          </div>

          <div className="hyd-competition-grid">
            {competitions.map((competition, index) => {
              const Icon = competition.icon;

              return (
                <motion.article
                  className="hyd-competition-card"
                  key={competition.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="hyd-card-top">
                    <div
                      className="hyd-card-icon"
                      style={{
                        color: competition.color,
                        background: `${competition.color}18`,
                      }}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="hyd-card-number">
                      {competition.number}
                    </span>
                  </div>

                  <h3>{competition.title}</h3>
                  <p>{competition.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fee and venue */}
      <section className="hyd-section hyd-details" id="registration-fee">
        <div className="hyd-container">
          <div className="hyd-section-heading">
            <span className="hyd-kicker">Event Essentials</span>
            <h2>Plan your Hyderabad experience.</h2>
            <p>
              Find the competition fee and venue details below before planning
              your participation.
            </p>
          </div>

          <div className="hyd-details-grid">
            <article className="hyd-detail-card">
              <h3>Registration Fee</h3>

              <div className="hyd-fee-line">
                <span>Base fee</span>
                <strong>₹7,080.00</strong>
              </div>

              <div className="hyd-fee-line">
                <span>GST (18%)</span>
                <strong>₹1,274.40</strong>
              </div>

              <div className="hyd-fee-total">
                <div>
                  <span className="hyd-total-label">Total payable</span>
                  <span className="hyd-total-amount">₹8,354.40</span>
                  <div className="hyd-total-note">
                    Base fee plus 18% GST
                  </div>
                </div>
              </div>

              <div className="hyd-included">
                <CheckCircle2 size={18} />
                <span>
                  The calculation above applies 18% GST to the stated base fee.
                  Please confirm the final amount and what the fee covers with
                  the event organiser.
                </span>
              </div>
            </article>

            <article className="hyd-detail-card" id="venue">
              <h3>Competition Venue</h3>

              <p className="hyd-address">
                <strong>Vasavi Public School</strong>
                <br />
                H.No. 3-6-215, Street No. 15,
                <br />
                AP State Housing Board, Himayathnagar
                <br />
                Near Urdu Hall,
                <br />
                Hyderabad, Telangana – 500029
              </p>

              <div className="hyd-venue-note">
                <CalendarDays size={18} />
                <span>
                  <strong>12 December 2026</strong>
                  <br />
                  Please confirm reporting time and event schedule with the
                  organiser.
                </span>
              </div>

              <a
                className="hyd-button hyd-button-primary"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps <Navigation size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="hyd-cta">
        <div className="hyd-container">
          <div className="hyd-cta-box">
            <div>
              <h2>Ready to bring your robot to Hyderabad?</h2>
              <p>
                Get your team ready for Rescue Line, OnStage, or Rescue Maze.
                Check the official event announcements for registration
                instructions, eligibility, and the latest updates.
              </p>
            </div>

            <a className="hyd-button" href="#registration-fee">
              View Event Details <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="hyd-footer-note">
          RoboCup Junior India · Hyderabad 2026
        </div>
      </section>
    </main>
  );
}
