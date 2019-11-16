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
          Come discover products nearby that need to be returned to the company.
          Instead of shipping them back, they’re shipped to you directly, at a
          rebate!
        </p>
      </div>
      <div className="leaning-banner">
        <Link to="/find" className="link">
          <p>DISCOVER NOW</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
