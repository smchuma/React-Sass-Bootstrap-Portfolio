import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content } = education;
  const bulletPoints = content.split("\t");

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
