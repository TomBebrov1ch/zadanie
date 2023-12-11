import React from 'react'
import { Fade } from "react-awesome-reveal";

import '../Advant/advant.scss'

import whiteStar from "../../images/white-star.svg";

const Advant = () => {
    return (
        <div className='cont'>
            <Fade direction='up'>
                <div className="cont__heading">
                    <h2 className='cont__heading__text'>Наши преимущества</h2>
                    <figure className='cont__heading__separator'></figure>
                    <h1 className='cont__heading__first-text'>ПРЕИМУЩЕСТВА РЕШЕНИЯ ПРОФЭКСПЕРТИЗА</h1>
                </div>
            </Fade>
            <div className="cont__products">
                <Fade direction='right' delay={200}>
                    <div className="cont__products__items">
                        <img className='cont__products__star' src={whiteStar} alt="" />
                        <p className='cont__products__text'>Первый продукт на рынке при поддержке практиков – налоговых экспертов</p>
                    </div>
                </Fade>
                <Fade direction='left' delay={300}>
                    <div className="cont__products__items">
                        <img className='cont__products__star' src={whiteStar} alt="" />
                        <p className='cont__products__text'>Готовая методика оценки эффектов от перехода на налоговый мониторинг для бизнеса</p>
                    </div>
                </Fade>
                <Fade direction='right' delay={400}>
                    <div className="cont__products__items">
                        <img className='cont__products__star' src={whiteStar} alt="" />
                        <p className='cont__products__text'>Функционал не только для инспекций, но и для компании</p>
                    </div>
                </Fade>
                <Fade direction='left' delay={500}>
                    <div className="cont__products__items">
                        <img className='cont__products__star' src={whiteStar} alt="" />
                        <p className='cont__products__text'>
                            Продуктовый подход к ИТ-решению: поддержка решения и развитие сервисных функций в рамках подписки(лицензии)</p>
                    </div>
                </Fade>
                <div className="cont__button">
                    <Fade>
                        <div className="cont__button-item">
                            <button className="cont__button__req">Оставить заявку</button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Advant