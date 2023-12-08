import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll"

import image from '../../images/IllustrationMain.svg';
import arrow from '../../images/arrows.svg'

const Main = () => {
  return (
    <div className="container">
      <Fade delay={100} direction="up" bottom>
        <div className="container__text">
          <p className="container__text__first-text">
            Преимущества налогового мониторинга
          </p>
          <hr className="separator" />
        </div>
      </Fade>
      <div className="container__main">
        <Fade delay={200} direction="up" bottom>
          <h1 className="container__main-text">
            О налоговом <span className="container__span-text">мониторинге</span>
          </h1>
        </Fade>
        <Fade delay={300} direction="left" left>
          <p className="container__last-text"><span className="container__span-last-text">Налоговый мониторинг</span> – добровольная альтернативная форма налогового контроля, которая заменяет стандартные выездные и камеральные налоговые проверки.</p>
        </Fade>
        <Fade delay={400} direction="right" rigth>
          <img className="container__image" src={image} alt="there are nothing:(" />
        </Fade>
        <div className="container__buttons">
          <Fade delay={500} direction="left" left>
            <button className="container__take" >Получить консультацию</button>
          </Fade>
          <Fade delay={600} direction="right" rigth>
            <Link className="container__more">
              Подробнее
            </Link>
          </Fade>
        </div>
        <div className="container__arrow">
          <Fade delay={700} direction="up" bottom>
            <img className="container__arrow-img" src={arrow} alt="this is arrow" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Main;
