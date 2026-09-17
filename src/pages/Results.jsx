import React from "react";
export default function Results(){
 const cats=[["Soccer","Team Alpha","Robo Warriors","Future Bots"],["Rescue","Circuit Breakers","Tech Titans","Robo Masters"],["OnStage","Innovate India","Future Makers","Bot Creators"]];
 return <main className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">RESULTS</span><h1>Celebrate the <em>teams.</em></h1></div></section>
 <section className="section"><div className="container"><div className="results-grid">{cats.map(([cat,a,b,c])=><article className="result-card" key={cat}><span className="mini-tag">{cat}</span><h2>National 2026</h2><div className="podium"><div><b>🥇</b><strong>{a}</strong><span>Champion</span></div><div><b>🥈</b><strong>{b}</strong><span>Runner-up</span></div><div><b>🥉</b><strong>{c}</strong><span>Third place</span></div></div></article>)}</div></div></section></main>
}