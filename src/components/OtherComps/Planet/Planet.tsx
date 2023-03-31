import React from "react";
import planet from "../../../images/planet.png";
import Animation from "./Animation";
import cl from "./Planet.module.scss";
const Planet = () => {
  return (
    <div>
      <div className={cl.outer}>
        <div className={cl.inner_1}></div>
        <div className="circle-animation">
          <Animation />
        </div>
        <div className={cl.inner_2}>
          <div className={cl.inner_3}>
            <div className={cl.inner_4}>
              <img src={planet} alt="planet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
