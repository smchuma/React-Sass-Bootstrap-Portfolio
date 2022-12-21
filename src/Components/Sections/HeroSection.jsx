import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const socials = {
  linkedin: "https://www.linkedin.com/in/samora-mchuma/",
  twitter: "https://twitter.com/SamoraMchuma",
  instagram: "https://www.instagram.com/samora_mchuma/",
  github: "https://github.com/smchuma",
};
const HeroSection = () => {
  return (
    <section id="home" className="home d-flex align-items-center">
      <div className="container">
        <div className="intro">
          <div className="circle">
            <img src="images/pic.png" alt="Samora Mchuma" className="mb-4" />
          </div>

          <h1 className="mb-2 mt-0">Samora Laurent Mchuma</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Frontend Developer ",
                "Backend developer",
                "Photography / Videographer",
                "VFX Artist",
                "Motion / Graphic Designer",
                "2D Animator",
              ]}
              typeSpeed={100}
              backSpeed={50}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href={socials.instagram} target="blank">
                <FaInstagram />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={socials.twitter} target="blank">
                <FaTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={socials.linkedin} target="blank">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={socials.github} target="blank">
                <FaGithub />
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
