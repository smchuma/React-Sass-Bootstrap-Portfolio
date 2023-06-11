import React from "react";
import { PageTitle } from "../../Elements";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <PageTitle title="About Me" />
        <div className="row rounded bg-white shadow-dark">
          <div className=" text-justify text-md-right ">
            <div className="padding-30">
              <p>
                I am a skilled Fullstack Developer proficient in JavaScript,
                React.js, and Node.js. I specialize in writing clean, scalable
                code and have experience in optimizing applications for maximum
                performance. With a strong foundation in web development and a
                knack for problem-solving, I am dedicated to delivering
                high-quality solutions.
              </p>
              <p>
                I am also a data engineering enthusiast, currently learning
                about data engineering. I have developed a deep interest in the
                critical role that data plays in powering modern applications
                and driving informed decision-making. As I delve into the world
                of data engineering, I am excited to build robust data
                infrastructure, design efficient data pipelines, and implement
                data integration strategies.
              </p>
              <div className="mt-3">
                <a href="cv.pdf" download="Samora Mchuma CV.pdf">
                  <button className="btn btn-default">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="coding">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-square-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-sass"></i>
          <i className="fa-brands fa-vuejs"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-git"></i>
          <i className="fa-brands fa-angular"></i>
        </div>
      </div>
      <div className="spacer" data-height="70"></div>
      <div className="spacer" data-height="70"></div>
    </section>
  );
};

export default About;
