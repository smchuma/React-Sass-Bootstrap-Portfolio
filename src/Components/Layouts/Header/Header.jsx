import React from "react";
import { Link } from "react-scroll";
import Logo from "../../Elements/Logo";

const Header = ({ light, logoSource, toggleMenu, headerToggler }) => {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          {/* <Logo logoSource={logoSource} /> */}
        </div>
      </header>
      <header className={handleClasses()}>
        <div className="circle">
          <img src="./images/pic.png" alt="sam" />
        </div>

        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-house"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-user"></i>About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-services"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-regular fa-lightbulb"></i>Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-user-graduate"></i>Resume
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-works"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-briefcase"></i>Works
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-blogs"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-diagram-project"></i>Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fa-solid fa-phone-volume"></i>Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
