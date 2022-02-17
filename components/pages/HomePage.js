import { useEffect, useState } from "react"
import { Coursecard } from "./courseCards/courseCard.js"
import css from "../../styles/headerBtn.module.css"
import { Mentorscard } from "./mentors/mentorsCard.jsx"
import {Courses} from "./aboutCourses/aboutCourses"


export default function HomePage() {

  const [modalActive, setModalActive] = useState(false)
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return <div>
    <div className="theme">
      <main className="header">
        <div className="container u-relative">
          <h2 className="header-title">Научись программировать с нуля до уровня профи</h2>
          <div className="header-subtitle">
            <p>В кратчайшие сроки от экспертов в IT образовании</p>
          </div>
          <div className={css.headerbtn + " " + (modalActive ? css.modalActive : "")} onClick={() => setModalActive(false)}>
            <div className={css.modal__content} onClick={(e) => e.stopPropagation()}>
              <a id="write_us" href="#" className="btn btn-blue animate-y write_us" onClick={() => setModalActive(true)}>Бесплатная консультация</a>
            </div>
          </div>
        </div>
        <div className="about-parallax-container">
          <div className="about-parallax">
            <div className="parallax__layer">
              <img className="about-parallax-sky" src="./images/Sky.svg" alt="" id="parallaxSky" style={{ top: ` ${-100 + (offset / 2)}px` }} />
            </div>
            <div className="parallax__layer">
              <img className="about-parallax-mountains" src="./images/Mountains.svg" alt="" id="parallaxMountains"
                style={{ top: ` ${350 + (offset / 2)}px` }} />
            </div>
            <div className="parallax__layer">
              <img className="about-parallax-bottom" src="./images/Bottom-part-of-BG.svg" alt="" id="parallaxBottom"
                style={{ bottom: ` ${-400 + (offset / 1)}px` }} />
            </div>
            <div className="about-parallax-bg"></div>
          </div>
        </div>
      </main>
      <section className="courses container">
        <h2 className="courses-title">Ближайшие курсы</h2>
        <div className="header-subtitle">Выбери себе подходящий курс и стань программистом в следующих <br />направлениях</div>
        <div className="cousers__cards--container">
          {
            [
              { linearStart: "#13d524", linearEnd: "#ffdc18" }, 2,
              { linearStart: "#11c829", linearEnd: "#ffac10" }
            ].map((item) => <Coursecard {...item} />)
          }
        </div>
      </section>
      <section id="app" className="app container">
        <h2 className="courses-title">Почему выгодно обучаться у нас</h2>
        <div className="header-subtitle">Причины, по которым люди обучаются в нашей школе программирования</div>

        <div className="timeline-page mt-5">
          <div className="timeline-item">
            <div className="row">
              <div className="col-md-6">
                <div className="duration date-label-left"><img src="images/intranet.png" alt="Intranet" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="works works-description-right">
                  <h3>Онлайн платформа для каждого студента</h3>
                  <p className="web-cta-desc mx-auto text-muted">Вы не пропустите НИЧЕГО! Весь материал и видеоуроки будут у
                    вас в доступе! Даже после окончания курсов, доступ у вас остается навсегда.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-md-6">
                <div className="works works-description-left">
                  <h3>Тщательно проработанные курсы </h3>
                  <p className="web-cta-desc mx-auto text-muted">Наша команда постоянно совершенствует контент курсов по
                    программированию, их задачи и сам подход к обучению.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="duration duration-right "><img data-src="images/intranet.png" alt="Courses"
                  className="img-fluid ls-is-cached lazyloaded" src="images/intranet.png" /></div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-md-6">
                <div className="duration date-label-left"><img data-src="images/intranet.png" alt="Support"
                  className="img-fluid lazyloaded" src="images/intranet.png" /></div>
              </div>
              <div className="col-md-6">
                <div className="works works-description-right">
                  <h3>Гарантия качества</h3>
                  <p className="web-cta-desc mx-auto text-muted">Мы гарантируем качественное обучение! Вернем деньги в течение
                    первых 3-х занятий, если курс вам не подходит!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-md-6">
                <div className="works works-description-left">
                  <h3>Мы те, кто умеет обучать и мотивировать</h3>
                  <p className="web-cta-desc mx-auto text-muted">Мы действующие программисты и профессора, которые умеют
                    преподавать, давать мотивацию и подносить информацию!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="duration duration-right"><img data-src="images/intranet.png" alt="Community"
                  className="img-fluid ls-is-cached lazyloaded" src="images/intranet.png" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features container">
        <h2 className="courses-title">Для кого наши курсы</h2>
        <div className="header-subtitle">Наши курсы для тебя, если ты хочешь:</div>
        
        <div className="row mt-5" >
        {
        [1,2,3].map(() =><Courses />)
        } 
        </div>

        <br /><br />
        <div className="header-btn">
          <a id="write_us" className="btn btn-blue animate-y write_us">Запишите меня на ваши курсы!</a>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="container about">
        <h2 className="courses-title">Мы не просто школа программирования, мы <br /> академия с глобальной целью
          <span style={{ color: "#0accda", lineHeight: "40px" }}>стать фабрикой <br /> крутых программистов!</span>
        </h2>
        <div className="row mt-5">
          {
            [1, 2, 3].map(() => <Mentorscard />)
          }
        </div>
      </section>
      <section className="section bg-image__section jarallax" data-jarallax="{&quot;speed&quot;: 0.2}"
        style={{ backgroundImage: "url(https://bitlab.kz/images/75.jpg)", filter: "none" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center cta-Landsay mx-auto text-white">
                <p className="cta-title mt-4 mb-4 font-weight-normal">Знания - это актив, который невозможно потерять.</p>
                <div className="mt-4">
                  <a className="btn btn-outline-custom btn-round font-weight-bold write_us" data-toggle="modal"
                    data-target="#exampleModalLong">Получить знания</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div className="bg-overlay"></div> --> */}

      </section>
    </div>
  </div>;
}
