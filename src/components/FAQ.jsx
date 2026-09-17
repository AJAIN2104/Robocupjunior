import React, {useState} from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
 ["What is RoboCupJunior?","RoboCupJunior is a project-driven robotics initiative for young people. It gives students a pathway to learn robotics, coding, teamwork and problem solving through practical challenges."],
 ["Who can participate?","Eligibility depends on the division and the rules adopted by the event. Always check the current event rules before registering a team."],
 ["What are the main Junior leagues?","The three core RoboCupJunior areas are Soccer, Rescue and OnStage. Rescue itself contains several challenge formats."],
 ["Do I need a specific robot kit?","RoboCupJunior is platform agnostic. Teams can choose appropriate hardware and programming tools within the applicable rules."],
 ["How does the India pathway work?","The site is designed around a progression from learning and local activity to regional qualification, national competition and the international RoboCup community."]
];

export default function FAQ(){
 const [active,setActive]=useState(0);
 return <div className="faq-list">{faqs.map(([q,a],i)=><div className={active===i?"faq active":"faq"} key={q}>
   <button onClick={()=>setActive(active===i?-1:i)}><span>{q}</span>{active===i?<Minus/>:<Plus/>}</button>
   <div className="faq-answer"><p>{a}</p></div>
 </div>)}</div>
}