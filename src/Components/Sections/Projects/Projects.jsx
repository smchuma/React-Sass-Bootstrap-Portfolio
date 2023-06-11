import React from "react";
import { Project, PageTitle } from "../../Elements";
import { projectData } from "./data";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <PageTitle title="Projects" />
        <div className="row blog-wrapper">
          {projectData.map((item) => (
            <div className="col-md-6" key={item.id}>
              <Project projectData={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="spacer" data-height="70"></div>
    </section>
  );
};

export default Projects;
