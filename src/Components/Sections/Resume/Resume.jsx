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
    id: 2,
    title: "Operations Intern at KCB Bank Kenya",
    years: "Feb 2023 - May 2023",
    content:
      "Acquired knowledge of banking systems and software utilization, applicable to software development projects. \t Demonstrated proficiency in administrative tasks related to banking systems and software utilization. \t Enhanced troubleshooting efficiency by 30% within the operations department, leading to faster resolution of ICT-related issues.",
  },

  {
    id: 3,
    title: "IT and Software Development Assistant (Work Study Program)",
    years: "Sep 2018 - Sep 2022",
    content:
      "Improved student project completion rates by 20% through React.js and Node.js implementation. \t Optimized website performance and user experience with responsive design techniques. \t Collaborated with design team for visually appealing and user-friendly interfaces.",
  },
  {
    id: 1,
    title: "Full Stack Engineer",
    years: "2021 - Present",
    content:
      "I develop full-stack web applications with the MERN stack | MongoDB, Express, React, and Node.js |",
  },
];

const Resume = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <PageTitle title="Resume" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp rounded shadow-dark padding-30 overflow-hidden">
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
