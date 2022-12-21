import React from "react";
import { PageTitle } from "../../Components";

const aboutContent = {
  name: "Samora Mchuma",
  avatarImage: "https://miro.medium.com/max/828/1*IRGHmiGsa16stedQvIaZfw.gif",
  content:
    "I have a bachelor’s degree in information systems technology from United States International University-Africa and have more than 2 years of experience as a front-end developer. I have advanced knowledge of React and Node.js, as well as the ability to work independently and solve problems creatively. I've worked on several projects, including a clothing e-commerce website where users can buy clothes; a cryptocurrency tracker where users can keep track of their cryptocurrencies; and a YouTube clone where users can watch YouTube videos. These projects have helped me improve my programming skills immensely.",
};

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <PageTitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
                width="100%"
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark col-md-20">
              <div className="row">
                <div className="padding-30">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
};

export default About;
