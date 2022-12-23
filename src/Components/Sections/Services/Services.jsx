import React from "react";
import { Link } from "react-scroll";
import { PageTitle, Service } from "../../Elements";

const servicesData = [
  {
    id: 1,
    icon: "images/code.png",
    title: "Development",
    content:
      "HTML/CSS/Javascript |  React / Redux |  Node / Express | MYSQL | Vue.js / Vuex",
    color: "#252734",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/graphic.png",
    title: "Illustration",
    content:
      "| Graphic Design | Motion Graphics | Logo Design | 2d Animation |",
    color: "#373a4c",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/camera.png",
    title: "Production",
    content:
      "| Photography | Videography | Video Editing | Visual Effects | Music Visualizer",
    color: "#252734",
    contentColor: "light",
  },
];
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <PageTitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
      <div className="spacer" data-height="70"></div>
    </section>
  );
};

export default Services;
