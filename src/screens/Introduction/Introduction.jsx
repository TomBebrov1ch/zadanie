import React from "react";
import { Fade } from "react-awesome-reveal";
import "../Introduction/introduction.scss";
import "../mainScreen/main.scss";

import Star from "../../images/star.svg";

const Introduction = () => {
  return (
    <div className="container">
      <Fade direction="up">
        <div className="container__text">
          <p>
            КРИТЕРИИ ДЛЯ ВСТУПЛЕНИЯ В
            <span className="container__span-text">НАЛОГОВЫЙ МОНИТОРИНГ</span>
          </p>
        </div>
      </Fade>
      <div className="container__text">
        <Fade direction="up">
          <Fade direction="right">
            <img className="container__star" src={Star} alt="this is star" />
          </Fade>
          <p className="container__text-second">
            На этапе внедрения налогового мониторинга в России перейти на
            налоговый мониторинг могли только самые крупные компании. Постепенно
            критерии для получения права вхождения в налоговый мониторинг
            смягчаются, и сейчас компания должна отвечать одновременно следующим
            требованиям:
          </p>
        </Fade>
        <Fade delay={200} direction="left">
          <div className="container__card">
            <div className="container__card__first">
              <p className="container__card__number">1</p>
              <p className="container__card__word">Критерий</p>
              <p className="container__card__par">
                <span className="container__card__span">100 млн рублей</span> -
                общая сумма налогов за год
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={300} direction="right">
          <div className="container__card">
            <div className="container__card__first">
              <p className="container__card__number">2</p>
              <p className="container__card__word">Критерий</p>
              <p className="container__card__par">
                <span className="container__card__span">1 млрд рублей</span> -
                сумма полученных доходов организацией
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={400} direction="left">
          <div className="container__card">
            <div className="container__card__first">
              <p className="container__card__number">3</p>
              <p className="container__card__word">Критерий</p>
              <p className="container__card__par">
                <span className="container__card__span">100 млн рублей</span> -
                совокупная стоимость активов.
              </p>
            </div>
          </div>
        </Fade>
        <div className="container__buttons">
          <Fade delay={500} direction="right">
            <button className="container__buttons__cons">
              Получить консультацию
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
