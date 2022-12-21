import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logoSource, bootstrapNav }) => {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Samora Mchuma" />
      </Link>
    );
  }
  return (
    <>
      <div className="site-logo">
        <Link to="/">
          <img src={logoSource} alt="Samora Mchuma" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
