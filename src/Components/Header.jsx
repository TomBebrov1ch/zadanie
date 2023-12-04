import React from 'react'

const Header = () => {
  return (
    <>
    <div className='header'>
    <a className='header__logo'>Logo</a>
    <span className='header__text'>
    <a className='header__main'>Главная</a>
    <a className='header__team'>Наша команда</a>
    <a className='header__req' href="">Оставить заявку</a>
    </span>
    </div>
    </>
  )
}

export default Header