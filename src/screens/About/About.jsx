import React from "react";
import { Fade } from "react-awesome-reveal";
import Star from "../../images/star.svg";

import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div className="con">
      <Fade direction="up" up>
        <div className="con__text">
          <p className="con__about">О налоговом мониторинге</p>
          <hr className="con__separator" />
        </div>
      </Fade>
      <div className="con__all-text">
        <div className="con__explain">
          <Fade>
            <h1 className="con__main">
              Что дает организациям переход на{" "}
              <span className="con__explain-span">налоговый мониторинг</span>
            </h1>
            <div className="con__first-star">
              <img className="con__star" src={Star} alt="Star" />
              <p className="con__first-text">
                Эффективность для налогоплательщиков налогового мониторинга
                отражается в динамике перехода на данную форму контроля
                крупнейший российских компаний
              </p>
            </div>
            <div className="con__second-star">
              <img className="con__star" src={Star} alt="Star" />
              <p className="con__second-text">
                При этом для отдельных компаний переход на налоговой мониторинг
                стал обязательным. Так, с 2023 года введена обязанность
                компаний, заключивших Соглашение о защите и поддержке
                капиталовложений, перейти на налоговый мониторинг в течение трех
                лет со дня заключения такого соглашения.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="con__accordions">
        <Fade>
          <MDBAccordion>
            <MDBAccordion className="con__border-accordion" initialActive={0}>
              <MDBAccordionItem
                className="con__item"
                collapseId={1}
                headerTitle={
                  <>
                    <MDBIcon className="con__icon" fas icon="clock" size="xl" />{" "}
                    &nbsp;
                    <p className="con__a-paragraph">
                      Сокращение проведения контрольных мероприятий
                    </p>
                  </>
                }
              >
                В рамках обычной выездной проверки решение налогового органа
                может быть получено по истечению 4-5 лет после окончания
                налогового периода с соответствующими этому периоду суммой пени.
                В налоговом мониторинге период проверки заканчивается в течение
                9 месяцев после окончания налогового периода.
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBAccordion>
        </Fade>
        <Fade>
          <MDBAccordion initialActive={0}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon
                    className="con__icon"
                    fas
                    icon="file-alt"
                    size="xl"
                  />{" "}
                  &nbsp;
                  <p className="a-paragraph">Мотивированное мнение</p>
                </>
              }
            >
              Возможность получить мотивированное мнение налогового органа по
              конкретной хозяйственной ситуации.
            </MDBAccordionItem>
          </MDBAccordion>
        </Fade>
        <Fade>
          <MDBAccordion initialActive={0}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon className="con__icon" fas icon="cog" size="xl" />{" "}
                  &nbsp;
                  <p className="a-paragraph">
                    Регламентация и автоматизация взаимодействия с налоговым
                    органом
                  </p>
                </>
              }
            >
              Предоставление документов осуществляется в рамках регламента
              информационного взаимодействия в установленные сроки <br />
              <br /> Автоматизация взаимодействия и представления документов 
              Сокращение объема запрашиваемых документов.
              <br />
              <br />
              На практике количество запрашиваемых документов сокращается более
              чем в 10 раз <br />
              <br /> Сокращение трудозатрат на подбор и предоставление
              документов через интеграцию с АИС-Налог 3
            </MDBAccordionItem>
          </MDBAccordion>
        </Fade>
        <Fade>
          <MDBAccordion initialActive={0}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon
                    className="con__icon"
                    fas
                    icon="balance-scale"
                    size="xl"
                  />{" "}
                  &nbsp;
                  <p className="a-paragraph">Управление рисками</p>
                </>
              }
            >
              Снижение влияния отрицательной ретроспективной судебной практики,
              применяемой налоговыми органами к предыдущим периодам. По оценке,
              около 80% претензий налоговых органов связано со сформированной
              судебной практикой за 2-3 года до вынесения решения по проверке,
              хотя в проверяемом периоде могла быть другая трактовка
              законодательства.
            </MDBAccordionItem>
          </MDBAccordion>
        </Fade>
        <Fade>
          <MDBAccordion initialActive={0}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon
                    className="con__icon"
                    fas
                    icon="chart-line"
                    size="xl"
                  />{" "}
                  &nbsp;
                  <p className="a-paragraph">
                    Развитие системы внутреннего контроля
                  </p>
                </>
              }
            >
              Снижение риска «человеческого фактора»
            </MDBAccordionItem>
          </MDBAccordion>
        </Fade>
      </div>
    </div>
  );
};

export default About;
