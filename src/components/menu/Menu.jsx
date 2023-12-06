import React, { useState, useEffect } from "react";

import Hamburger from "hamburger-react";
import { Fade, Slide } from "react-awesome-reveal";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Slide className={`menu ${isOpen ? "open" : ""}`} direction="down">
        <div className="menu-content">
          <div className="burger-btn" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} color="#007ACC" />
          </div>
          <div className="menu-items">
            <h1>Главная</h1>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Menu;
