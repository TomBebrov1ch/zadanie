import React from 'react'
import { Fade } from "react-awesome-reveal";
import Star from '../../images/star.svg'

const About = () => {
    return (
        <div className='con'>
            <Fade direction='up' up>
                <div className="con__text">
                    <p className='con__about'>
                        О налоговом мониторинге
                    </p>
                    <hr className='con__separator' />
                </div>
            </Fade>
            <div className="con__all-text">
                <div className="con__explain">
                    <Fade>
                        <h1 className='con__main'>
                            Что дает организациям переход на <span className='con__explain-span'>налоговый мониторинг</span>
                        </h1>
                        <div className='con__first-star'>
                            <img className='con__star' src={Star} alt="Star" />
                            <p className='con__first-text'>Эффективность для налогоплательщиков налогового мониторинга отражается в динамике
                                перехода на данную форму контроля крупнейший российских компаний</p>
                        </div>
                        <div className="con__second-star">
                            <img className='con__star' src={Star} alt="Star" />
                            <p className='con__second-text'>При этом для отдельных компаний переход на налоговой мониторинг стал обязательным. Так, с
                                2023 года введена обязанность компаний, заключивших Соглашение о защите и поддержке
                                капиталовложений, перейти на налоговый мониторинг в течение трех лет со дня заключения
                                такого соглашения.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default About