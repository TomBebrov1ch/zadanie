import React from "react";
import { Fade } from "react-awesome-reveal";

import Star from "../../images/star.svg";

import "../Results/results.scss";

const Results = () => {
  return (
    <div className="conts">
      <Fade>
        <div className="conts__head">
          <h2 className="conts__text">Итоги</h2>
          <hr className="conts__separator" />
        </div>
      </Fade>
      <Fade>
        <div className="conts__main">
          <h1 className="conts__main-text">
            ЧТО ВЫ ПОЛУЧИТЕ ПО{" "}
            <span className="conts__main-span">ИТОГАМ ПРОЕКТА</span>
          </h1>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card">
          <div className="conts__card-first">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">Комплексное решение</p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card">
          <div className="conts__card-first">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">Интеграцию с АИС Налог-3</p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card">
          <div className="conts__card-first">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">Техническую поддержку решения</p>
          </div>
        </div>
        <hr className="conts__card__separator" />
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Решение может взаимодействовать с любыми учтёнными системами
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Легко тиражируемое решение на другие компании группы
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Комплект методологических, регламентных и иных документов
            </p>
          </div>
        </div>
        <hr className="conts__card__separator" />
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Подсистему обработки запросов от налоговых инспекторов с отчетом о
              действиях пользователей
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Эффективную ролевую модель, с минимальным количеством ролей и
              конфликтов в решении
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="conts__card__second">
          <div className="conts__card__second-text">
            <img className="conts__card__img" src={Star} alt="" />
            <p className="conts__card__text">
              Модели раскрытия отчетности с надстроенными контрольными
              соотношениями
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Results;
