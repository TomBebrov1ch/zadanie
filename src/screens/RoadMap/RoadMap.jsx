import React from "react";
import { Fade } from "react-awesome-reveal";

import "../RoadMap/roadmap.scss";

import Search from "../../images/searchMap.svg";
import Settings from "../../images/settingsMap.svg";
import Coins from "../../images/coinsMap.svg";
import Puzzle from "../../images/puzzleMap.svg";
import Stats from "../../images/statsMap.svg";
import Rocket from "../../images/rocketMap.svg";

const RoadMap = () => {
  return (
    <div className="containers">
      <Fade>
        <div className="containers__text">
          <h2 className="contain__text">Этапы работы</h2>
          <hr className="contain__separator" />
          <h1 className="containers__text__main">ДОРОЖНАЯ КАРТА</h1>
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">01</h1>
          <p className="containers__card__text">
            Диагностика, перечень <br />
            требуемых изменений
          </p>
          <img className="containers__card__image" src={Search} alt="" />
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">02</h1>
          <p className="containers__card__text">
            Разработка ФТТ и<br /> определение совокупной
            <br /> стоимости перехода в НМ
          </p>
          <img className="containers__card__image" src={Settings} alt="" />
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">03</h1>
          <p className="containers__card__text">
            Определение совокупных
            <br /> доходов от перехода в НМ
          </p>
          <img className="containers__card__image" src={Coins} alt="" />
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">04</h1>
          <p className="containers__card__text">
            Методологическая
            <br /> подготовка к проекту
          </p>
          <img className="containers__card__image" src={Puzzle} alt="" />
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">05</h1>
          <p className="containers__card__text">Проектные работы</p>
          <img className="containers__card__image" src={Settings} alt="" />
        </div>
      </Fade>
      <Fade>
        <div className="containers__card">
          <h1 className="containers__card__number">06</h1>
          <p className="containers__card__text">
            Проектная поддержка по
            <br /> реализованному функционалу
          </p>
          <img className="containers__card__image" src={Rocket} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default RoadMap;
