import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Project({ projectData }) {
  const { title, image, github, demo, desc, tech } = projectData;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="projects-item rounded ">
        <div className="thumb">
          <div>
            <img src={image} alt="projects-title" />
          </div>
        </div>
        <div className="details">
          <div className="my-0 title">
            <h4>{title}</h4>
          </div>
          <div>
            <p>{desc}</p>
          </div>
          <div>
            <p style={{ fontWeight: "400", color: "black" }}>{tech}</p>
          </div>
          <div className="buttons">
            <a href={github} target="blank">
              <button>GITHUB</button>
            </a>
            <a href={demo} target="blank">
              <button className="second">DEMO</button>
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Project;
