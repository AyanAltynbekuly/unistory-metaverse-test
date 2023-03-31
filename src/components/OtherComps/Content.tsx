import React from "react";
import Planet from "./Planet/Planet";
import planetWithText from "../../images/planetWithText.png";
import RoadMapStats from "./RoadMapStats";
import PlanetHeader from "./Planet/PlanetHeader";
const Content = () => {
  return (
    <div className="top">
      <div className="left-content">
        <div className="title">
          <h1>{"Explore your own planet \nin "}</h1>
          <h1 className="h1-with-border">
            our new <h1>metaverse</h1>
          </h1>
        </div>
        <div className="text-over-planet">
          <img src={planetWithText} alt="" />
        </div>
        <div className="planet-header-wrapper">
          <PlanetHeader />
        </div>
        <div className="planet-img-main">
          <Planet />
        </div>
        <div className="top-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <RoadMapStats />
    </div>
  );
};

export default Content;
