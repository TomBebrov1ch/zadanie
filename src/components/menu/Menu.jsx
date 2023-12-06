import React, {useState, useEffect} from 'react'

import Hamburger from 'hamburger-react'
import {Fade, Slide} from "react-awesome-reveal"


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    function closeMenu(){
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Slide className={`menu ${isOpen ? 'open' : ''}`} direction='down'>
        <div className='menu-content' onClick={props.menuClick}>
            <div className="burger-btn" onClick={closeMenu}>
                <Hamburger toggled={true} toggle={closeMenu} color='#007ACC' />
            </div>
            {isOpen && (
                <div className="menu-items">
                    <h1>Главная</h1>
                </div>
            )}
        </div>
    </Slide>
    </>
  )
}

export default Menu