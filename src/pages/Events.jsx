import React from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Events(){
 const events=[["01","REGIONAL QUALIFIER","Coming soon","India","Qualification events for teams beginning their national journey."],["02","ROBOCUP INDIA NATIONALS","2026 season","India","The national stage for qualifying teams across the country."],["03","ROBOCUP INTERNATIONAL","Global event","Worldwide","The international RoboCup community and championship experience."]];
 return <main className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">EVENTS</span><h1>Find your <em>next challenge.</em></h1><p>Follow the competition journey from regional activity to national and international opportunities.</p></div></section>
 <section className="section"><div className="container"><div className="event-list">{events.map(([n,t,date,place,d])=><article className="event-row" key={n}><div className="event-num">{n}</div><div className="event-main"><span className="mini-tag">{t}</span><h2>{date}</h2><p>{d}</p></div><div className="event-meta"><span><MapPin size={16}/>{place}</span><span><CalendarDays size={16}/>2026</span></div><Link to="/contact" className="circle-arrow"><ArrowRight/></Link></article>)}</div></div></section>
 <section className="section dark-section"><div className="container narrow"><h2>Want to host or support an event?</h2><p className="lead">Schools, institutions, mentors and partners can help grow robotics opportunities across India.</p><Link className="btn primary" to="/contact">Contact RoboCup India <ArrowRight size={17}/></Link></div></section>
 </main>
}