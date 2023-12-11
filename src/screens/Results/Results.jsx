import React from 'react'
import { Fade } from "react-awesome-reveal";

import Star from '../../images/star.svg'

import '../Results/results.scss'

const Results = () => {
    return (
        <div className='conts'>
            <Fade>
                <div className="conts__head">
                    <h2 className='conts__text'>Итоги</h2>
                    <hr className='conts__separator' />
                </div>
            </Fade>
            <Fade>
                <div className="conts__main">
                    <h1 className='conts__main-text'>ЧТО ВЫ ПОЛУЧИТЕ ПО <span className='conts__main-span'>ИТОГАМ ПРОЕКТА</span></h1>
                </div>
            </Fade>
        </div>
    )
}

export default Results