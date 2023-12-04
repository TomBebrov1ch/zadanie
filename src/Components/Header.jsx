import React, {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <>
    <header className='header'>
    <nav className='nav'>
    <ScrollLink className='header__logo'>Logo</ScrollLink>
    <span className='header__text'>
    <ScrollLink className='header__main'>Главная</ScrollLink>
    <ScrollLink className='header__team'>Наша команда</ScrollLink>
    <ScrollLink className='header__req' href="">Оставить заявку</ScrollLink>
    </span>
    </nav>
    <div>
    <Hamburger toggled={isOpen} toggle={setOpen}/>
    {/* <Hamburger onToggle={toggled => ...} /> */}
    </div>
    </header>
    </>
  )
}

export default Header