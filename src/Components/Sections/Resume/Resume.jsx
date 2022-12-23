import React from "react";
import { PageTitle, Timeline } from "../../Elements";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2018 - 2023",
    content:
      "Pursuing Bachelor's Degree in Information System Technology at United States International University - USIU-Africa",
  },
  {
    id: 2,
    title: "Diploma Certificate",
    years: "2017 - 2013",
    content:
      "I obtained a diploma of TV/ Video Production in Mahanaim Educational Institute",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Freelance Web Designer",
    years: "2021 - Present",
    content:
      "I develop full-stack web applications with the MERN stack | MongoDB, Express, React, and Node.js |",
  },
  {
    id: 2,
    title: "Graphic Designer Kyeni TV",
    years: "2021 - 2021",
    content:
      "Developed and designed original graphics for Kyeni TV shows, utilizing Adobe Photoshop and Illustrator",
  },
  {
    id: 3,
    title: "Freelance Motion Graphics Designer",
    years: "2018 - Present",
    content: "Created Motion graphic advert and 2d animation for clients",
  },
];
const Resume = () => {
  return (
    <section id="experience">
      <div className="container">
        <PageTitle title="Resume" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" data-height="70"></div>
    </section>
  );
};

export default Resume;
