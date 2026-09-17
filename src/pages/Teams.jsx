import React from "react";
import { ArrowUpRight } from "lucide-react";
export default function Teams(){
 const teams=["Robo Warriors","Future Bots","Tech Titans","Circuit Breakers","Innovate India","Bot Masters"];
 return <main className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">TEAM COMMUNITY</span><h1>Meet the <em>builders.</em></h1><p>A showcase layout for participating teams, schools and robotics communities.</p></div></section>
 <section className="section"><div className="container"><div className="team-grid">{teams.map((t,i)=><article className="team-card" key={t}><div className="team-logo">R{i+1}</div><div><span>TEAM {String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>India • Robotics team</p></div><ArrowUpRight/></article>)}</div></div></section></main>
}