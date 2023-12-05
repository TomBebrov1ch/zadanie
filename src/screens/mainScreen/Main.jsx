import React from "react";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    <div className="container">
      <Fade duration={1800} direction="up" bottom>
        <div className="container__text">
          <p className="container__text__first-text">
            Преимущества налогового мониторинга
          </p>
          <hr className="separator" />
          <h1 className="text__main-text">
            О налоговом мониторинге
          </h1>
        </div>
      </Fade>
    </div>
  );
};

export default Main;
