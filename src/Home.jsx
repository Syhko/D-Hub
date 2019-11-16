import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <img className="logo" src="savelet.png" />
      <div className="parallax-one">
        <h1>WELCOME TO SAVELET</h1>
      </div>
      <div className="scroll-one">
        <p>
          SALUT CEST NOUS SALUT CEST NOUS SALUT CEST NOUS SALUT CEST NOUS SALUT
          CEST NOUS
        </p>
      </div>
      <div className="leaning-banner">
        <div>
          <div className="find-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
