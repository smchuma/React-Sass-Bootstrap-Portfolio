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
                I have a bachelor’s degree in information systems technology
                from United States International University-Africa and have more
                than 2 years of experience as a front-end developer. I have
                advanced knowledge of React and Node.js, as well as the ability
                to work independently and solve problems creatively.
              </p>
              <p>
                I've worked on several projects, including a clothing e-commerce
                website where users can buy clothes; a cryptocurrency tracker
                where users can keep track of their cryptocurrencies; and a
                YouTube clone where users can watch YouTube videos. These
                projects have helped me improve my programming skills immensely.
              </p>
              <div className="mt-3">
                <a
                  href="cv.pdf"
                  download="Samora Mchuma CV.pdf"
                  className="btn btn-default"
                >
                  Download CV
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
