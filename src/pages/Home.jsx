import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPinned, Users, Trophy, CalendarDays, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import CompetitionCards from "../components/CompetitionCards";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";

export default function Home(){
 return <>
  <Hero/>
  <main>
    <section className="intro section">
      <div className="container intro-grid">
        <div><span className="eyebrow">01 / ABOUT THE MOVEMENT</span><h2>Where young minds meet <em>real robotics.</em></h2></div>
        <div><p className="lead">RoboCup India is envisioned as a national platform for students, mentors, educators and robotics enthusiasts to learn through competition and build the skills shaping tomorrow.</p><Link className="text-link" to="/about">Learn about RoboCup India <ArrowRight size={17}/></Link></div>
      </div>
    </section>

    <section className="section dark-section" id="competitions">
      <div className="container">
        <SectionHeading eyebrow="02 / CHALLENGE AREAS" title="Choose your arena." text="Three ways to turn engineering, coding and creativity into a competition-ready robot."/>
        <CompetitionCards/>
      </div>
    </section>

    <section className="section pathway">
      <div className="container pathway-grid">
        <div>
          <SectionHeading eyebrow="03 / YOUR PATH" title="From first robot to world stage." text="A challenge-driven journey designed to help teams grow from their first build to sophisticated autonomous systems."/>
          <Link className="btn primary" to="/events">Explore Events <ArrowRight size={17}/></Link>
        </div>
        <Timeline/>
      </div>
    </section>

    <section className="stats-strip">
      <div className="container stats-grid">
        <div><Trophy/><b>COMPETE</b><span>Challenge yourself</span></div>
        <div><Users/><b>COLLABORATE</b><span>Learn as a team</span></div>
        <div><MapPinned/><b>CONNECT</b><span>Build India's community</span></div>
        <div><CalendarDays/><b>PROGRESS</b><span>Grow every season</span></div>
      </div>
    </section>

    <section className="section india-section">
      <div className="container india-grid">
        <div className="india-art">
          <div className="india-map">INDIA</div>
          <span className="map-pin pin-1"></span><span className="map-pin pin-2"></span><span className="map-pin pin-3"></span><span className="map-pin pin-4"></span>
          <div className="map-label north">NORTH</div><div className="map-label west">WEST</div><div className="map-label east">EAST</div><div className="map-label south">SOUTH</div>
        </div>
        <div>
          <SectionHeading eyebrow="04 / ACROSS INDIA" title="One community. Every region." text="A future-ready national network can connect local robotics activity with regional events and a national championship."/>
          <div className="region-list">
            <div><b>North</b><span>Regional events & workshops</span></div>
            <div><b>West</b><span>Regional events & workshops</span></div>
            <div><b>East</b><span>Regional events & workshops</span></div>
            <div><b>South</b><span>Regional events & workshops</span></div>
          </div>
        </div>
      </div>
    </section>


    <section className="section faq-section">
      <div className="container faq-grid">
        <SectionHeading eyebrow="06 / FAQ" title="Questions, answered." text="Everything you need to get started."/>
        <FAQ/>
      </div>
    </section>

    <section className="cta-section">
      <div className="container cta-inner">
        <span className="eyebrow">READY TO BUILD?</span>
        <h2>Your robot starts with an idea.</h2>
        <p>Join the movement and start your journey into competitive robotics.</p>
        <Link className="btn light" to="/contact">Start your journey <ArrowRight size={18}/></Link>
      </div>
    </section>
  </main>
 </>;
}