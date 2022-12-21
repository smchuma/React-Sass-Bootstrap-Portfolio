import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import { About, Header, HeroSection } from "../../Components";

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
      </main>
    </>
  );
};

export default Home;
