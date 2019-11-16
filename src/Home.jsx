import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <img className="logo" src="savelet.png" />
      <div className="parallax-one">
        <h1>WELCOME TO SAVELET</h1>
      </div>
      <div className="scroll-one">
        <p>
          Return systems today are so expensive that this could in many cases
          save retailers across the globe billions of dollars and considerably
          shorten lead times in urban areas. The savings would be redistributed
          to the customers to reward them for their proactive and sustainable
          approach.
        </p>
      </div>
      <div className="leaning-banner">
        <Link to="/find" className="link">
          <div className="find-button">
            <p>DISCOVER NOW</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
