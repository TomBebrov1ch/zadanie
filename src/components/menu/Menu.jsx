import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import Hamburger from "hamburger-react";
import { Fade, Slide } from "react-awesome-reveal";

import "../menu/menu.scss";

const Menu = (props) => {
  return (
    <div className="menu__con">
      <Slide className="menu" direction="down">
        <div className="menu-content">
          <div className="burger-btn" onClick={props.toggleMenu}></div>
          <div className="menu-items"></div>
          <div className="text">
            <div className="text__menu">
              <Fade direction="left">
                <h1 className="text__menu__content">Главная</h1>
              </Fade>
              <Fade direction="right" delay={200}>
                <h1 className="text__menu__content">Приемущества</h1>
              </Fade>
              <Fade direction="left" delay={300}>
                <h1 className="text__menu__content">Дорожная карта</h1>
              </Fade>
              <Fade direction="right" delay={400}>
                <h1 className="text__menu__content">Новости</h1>
              </Fade>
              <Fade direction="left" delay={500}>
                <h1 className="text__menu__content">Статьи</h1>
              </Fade>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Menu;
