import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import {
  About,
  Contact,
  Header,
  HeroSection,
  Projects,
  Resume,
  Services,
  Works,
} from "../../Components";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <HeroSection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Resume />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-projects">
          <Projects />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
      </main>
    </>
  );
};

export default Home;
