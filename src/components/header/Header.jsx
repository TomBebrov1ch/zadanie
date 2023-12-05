import React, {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import { Link as ScrollLink } from "react-scroll";


const Header = ({ isOpen , setOpen }) => {
  useEffect(() => {
    if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY= '';
  }

  return () => {
    document.body.style.overflowY = '';
    };
  }, [isOpen]);  
  
  return (
    <>
    <header className='header'>
    <nav className='nav'>
    <ScrollLink className='header__logo'>Logo</ScrollLink>
    <span className='header__text'>
    <ScrollLink className='header__main'>Главная</ScrollLink>
    <ScrollLink className='header__advant'>Приемущества</ScrollLink>
    <ScrollLink className='header__road'>Дорожная карта</ScrollLink>
    <ScrollLink className='header__news'>Новости</ScrollLink>
    <ScrollLink className='header__art'>Статьи</ScrollLink>
    </span>
    </nav>
    <span>
    <ScrollLink className='header__req'>Оставить заявку</ScrollLink>
    </span>
    <div className='burger-menu'>
    <Hamburger
      color="#007ACC"
      toggled={isOpen}
      onToggle={setOpen}
    ></Hamburger>
    </div>
    </header>
    </>
  )
}

export default Header