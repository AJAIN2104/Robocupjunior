import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <span className="brand-mark">RC</span>
            <span><strong>ROBOCUP</strong><small>INDIA</small></span>
          </div>
          <p>Building the next generation of robotics innovators through challenge-driven learning, teamwork and technology.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="#" aria-label="YouTube"><Youtube size={18}/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/events">Events</Link>
          <Link to="/teams">Teams</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link to="/results">Results</Link>
          <Link to="/news">News</Link>
          <a href="#">Rules & Guides</a>
          <a href="#">Downloads</a>
        </div>
        <div>
  <h4>Contact</h4>

  <p className="contact-line">
    <Mail size={16} />
    david.robotics@gmail.com

  </p>

  <p className="contact-line">
    <span>👤</span>
    Mr David Prakash
  </p>

  <p className="contact-line">
    <span>📞</span>
    +91 80560 29929
  </p>

  <p className="contact-line">
    <MapPin size={16} />
    India
  </p>

  <Link className="footer-contact" to="/contact">
    Get in touch <ArrowUpRight size={15} />
  </Link>
</div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 RoboCup India. All rights reserved.</span>
        <span>Inspired by the global RoboCup movement.</span>
      </div>
    </footer>
  );
}