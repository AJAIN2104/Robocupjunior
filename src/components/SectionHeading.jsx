import React from "react";
export default function SectionHeading({eyebrow, title, text, center=false}) {
  return (
    <div className={center ? "section-heading center" : "section-heading"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}