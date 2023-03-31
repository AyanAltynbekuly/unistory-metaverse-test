import React from "react";
import cl from "./PlanetHeader.module.scss";

const PlanetHeader = () => {
  return (
    <div className={cl.planetHeader}>
      <div className={cl.planetHeaderContent}>
        <span>Q1 2022</span>
        <div className={cl.planetHeaderOuterCircle}>
          <div className={cl.planetHeaderInnerCircle}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetHeader;
