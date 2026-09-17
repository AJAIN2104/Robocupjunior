import React from "react";
import { CheckCircle2 } from "lucide-react";

const items = [
  ["01","Discover","Choose a challenge and start learning the rules."],
  ["02","Build","Design, prototype and program your robot."],
  ["03","Qualify","Take part in regional and national events."],
  ["04","Represent","Carry India's innovation to the global RoboCup community."]
];

export default function Timeline(){
  return <div className="timeline">
    {items.map(([n,t,d],i)=><div className="timeline-item" key={n}>
      <div className="timeline-num">{n}</div><div className="timeline-dot"><CheckCircle2 size={16}/></div>
      <div><span className="mini-tag">STEP {n}</span><h3>{t}</h3><p>{d}</p></div>
      {i<items.length-1 && <div className="timeline-connector"/>}
    </div>)}
  </div>
}