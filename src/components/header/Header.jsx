import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ScrollLink className="header__logo">Logo</ScrollLink>
          <span className="header__text">
            <ScrollLink className="header__main">Главная</ScrollLink>
            <ScrollLink className="header__advant">Приемущества</ScrollLink>
            <ScrollLink className="header__road">Дорожная карта</ScrollLink>
            <ScrollLink className="header__news">Новости</ScrollLink>
            <ScrollLink className="header__art">Статьи</ScrollLink>
          </span>
        </nav>
        <span>
          <ScrollLink className="header__req">Оставить заявку</ScrollLink>
        </span>
      </header>
    </>
  );
};
export default Header;
