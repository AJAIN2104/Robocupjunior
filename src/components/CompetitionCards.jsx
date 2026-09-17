import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ShieldAlert, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {id:"soccer", num:"01", icon:Bot, title:"Soccer", tag:"AUTONOMOUS FOOTBALL", text:"Build autonomous robots that sense, navigate, cooperate and compete on the field.", image:"soccer.jpg"},
  {id:"rescue", num:"02", icon:ShieldAlert, title:"Rescue", tag:"SEARCH & RESCUE", text:"Engineer robots for challenging disaster scenarios, navigation, obstacles and victim rescue.", image:"rescue.jpg"},
  {id:"onstage", num:"03", icon:Sparkles, title:"OnStage", tag:"ROBOTICS + CREATIVITY", text:"Create an autonomous robotic performance that combines engineering, storytelling and imagination.", image:"onstage.jpg"}
];

export default function CompetitionCards() {
  return <div className="competition-grid">
    {cards.map((c,i)=>{
      const Icon=c.icon;
      return <motion.article id={c.id} className="competition-card" key={c.id} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
        <div className="card-image"><img src={`/images/${c.image}`} alt={c.title}/><span className="number">{c.num}</span></div>
        <div className="card-body">
          <div className="card-icon"><Icon size={20}/></div>
          <span className="mini-tag">{c.tag}</span>
          <h3>RoboCupJunior<br/><strong>{c.title}</strong></h3>
          <p>{c.text}</p>
          <Link to="/competitions">Explore challenge <ArrowUpRight size={17}/></Link>
        </div>
      </motion.article>
    })}
  </div>;
}