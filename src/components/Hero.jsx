import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Zap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="container hero-content">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="hero-pill"><span></span> THE INDIAN ROBOTICS MOVEMENT</div>
          <h1>Build. Code.<br/><em>Compete.</em> <span>Lead.</span></h1>
          <p className="hero-copy">A national platform where young innovators turn ideas into autonomous robots, solve real challenges and represent India on the world stage.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/competitions">Explore Competitions <ArrowRight size={18}/></Link>
            <Link className="btn ghost" to="/about"><Play size={16} fill="currentColor"/> Discover RoboCup India</Link>
          </div>
          <div className="hero-stats">
            <div><b>01</b><span>National<br/>Platform</span></div>
            <div><b>03</b><span>Junior<br/>Leagues</span></div>
            <div><b>∞</b><span>Ideas &<br/>Possibilities</span></div>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}}>
          <div className="orbit orbit-a"></div>
          <div className="orbit orbit-b"></div>
         <div className="hero-photo">

  <motion.div
  className="hero-visual"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <img
    className="hero-photo"
    src="/images/robocup-hero.png"
    alt="RoboCup India robotics competition"
  />

  {/* keep your existing orbit/float cards below */}
</motion.div>

</div>
          <div className="float-card card-a"><Cpu/><span><b>AI + ROBOTICS</b><small>Learn by building</small></span></div>
          <div className="float-card card-b"><Zap/><span><b>CHALLENGE</b><small>Think beyond limits</small></span></div>
          <div className="float-card card-c"><Globe2/><span><b>GLOBAL PATHWAY</b><small>India → World</small></span></div>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <div className="container"><span>SCROLL TO EXPLORE</span><div className="scroll-line"></div></div>
      </div>
    </section>
  );
}