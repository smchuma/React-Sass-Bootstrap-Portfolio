import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import HashLoader from "react-spinners/HashLoader";
import { Home } from "./Pages";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader color={"#b9bdcf"} loading={loading} size={100} />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
