import React from 'react'
import { Fade } from "react-awesome-reveal";

import '../Implement/implement.scss'

import Star from '../../images/star.svg'
import IllustrationRealisation from '../../images/IllustrationRealisation.svg'

const Implement = () => {
    return (
        <div className='contain'>
            <Fade>
                <div className="contain__text-sep">
                    <h2 className='contain__text'>Реализация</h2>
                    <hr className='contain__separator' />
                </div>
            </Fade>
            <Fade>
                <div className="contain__img-text">
                    <h1 className='contain__main-text'>ЧТО ВЫ ПОЛУЧИТЕ В ПРОЦЕССЕ <span className='contain__main-span'>РЕАЛИЗАЦИИ ПРОЕКТА</span></h1>
                </div>
            </Fade>
            <div className="cont__products">
                <Fade direction='right' delay={200}>
                    <div className="contain__products__items">
                        <img className='contain__products__star' src={Star} alt="" />
                        <p className='contain__products__text'>Экспертную команду с реальным опытом разработки и внедрения решения</p>
                    </div>
                </Fade>
                <Fade direction='left' delay={300}>
                    <div className="contain__products__items">
                        <img className='contain__products__star' src={Star} alt="" />
                        <p className='contain__products__text'>Первичную экспертизу методических документов и формирование детального ТЗ с бизнесом</p>
                    </div>
                </Fade>
                <Fade direction='right' delay={400}>
                    <div className="contain__products__items">
                        <img className='contain__products__star' src={Star} alt="" />
                        <p className='contain__products__text'>Обсуждение этапов внедрения, узких мест и ошибок</p>
                    </div>
                </Fade>
                <Fade direction='left' delay={500}>
                    <div className="contain__products__items">
                        <img className='contain__products__star' src={Star} alt="" />
                        <p className='contain__products__text'>
                            Фокус на требования контрольной среды и существующие бизнес-процессы компании</p>
                    </div>
                </Fade>
                <Fade>
                    <div className="contain__products__img">
                        <img className='contain__products__ill' src={IllustrationRealisation} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Implement