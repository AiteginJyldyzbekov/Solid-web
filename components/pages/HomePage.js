import { useEffect, useState } from "react";
import { Coursecard } from "../common/courseCards/courseCard.js";
import { Mentorscard } from "../common/mentors/mentorsCard.jsx";
import { Courses } from "../common/aboutCourses/aboutCourses";
import { Timeline } from "../common/timeLine/timeLine.jsx";
import { db } from "../../config/firebase.js";

export default function HomePage() {
  const [offset, setOffset] = useState();
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState()
  const [number, setNumber] = useState()
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  let courses = [];
  let timeLineItem = [];
  let mentors = [];
  const [timeLine, setTimeLine] = useState(timeLineItem);
  const [course, setCourses] = useState(courses);
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    db.collection("reason").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        timeLineItem.push(doc.data())
        setTimeLine(timeLineItem)
      })
    })
    db.collection("courses").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        courses.push({...doc.data(), id: doc.id})
        setCourses(courses)
      })
      });
    db.collection("mentors")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          mentors.push({ ...doc.data(), id: doc.id });
          setMentor(mentors);
        });
      });
  }, []);
  const OpenModal = ()=>{
    setOpen(!open)
  }
  const submit = (e) => {
    e.preventDefault()
    setOpen(false)
  }
  return (
    <div>
      <div className="theme">
        <main className="header">
          <div className="container u-relative">
            <h2 className="header-title">
              Научись программировать с нуля до уровня профи
            </h2>
            <div className="header-subtitle">
              <p>В кратчайшие сроки от экспертов в IT образовании</p>
            </div>
            <div className="header-btn">
              <div
              onClick={OpenModal}
                id="write_us"
                className="btn btn-blue animate-y write_us"
              >
                Бесплатная консультация
              </div>
            </div>
          </div>
          <div className="about-parallax-container">
            <div className="about-parallax">
              <div className="parallax__layer">
                <img
                  className="about-parallax-sky"
                  src="./images/Sky.svg"
                  alt=""
                  id="parallaxSky"
                  style={{ top: ` ${-100 + offset / 2}px` }}
                />
              </div>
              <div className="parallax__layer">
                <img
                  className="about-parallax-mountains"
                  src="./images/Mountains.svg"
                  alt=""
                  id="parallaxMountains"
                  style={{ top: ` ${350 + offset / 2}px` }}
                />
              </div>
              <div className="parallax__layer">
                <img
                  className="about-parallax-bottom"
                  src="./images/Bottom-part-of-BG.svg"
                  alt=""
                  id="parallaxBottom"
                  style={{ bottom: ` ${-400 + offset / 1}px` }}
                />
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
            course.map((item) => <Coursecard {...item} key={item.id} leftColor={item.leftColor} rightColor={item.rightColor}  />)
          }
        </div>
      </section>
      <section id="app" className="app container">
        <h2 className="courses-title">Почему выгодно обучаться у нас</h2>
        <div className="header-subtitle">Причины, по которым люди обучаются в нашей школе программирования</div>
        <div className="timeline-page mt-5">
          {
            timeLine.map((item, index) => <Timeline
              key={item.id}
              isOdd={(index + 1) % 2 === 0}
              {...item}
            />)
          }
        </div>
      </section>
      <section className="features container">
        <h2 className="courses-title">Для кого наши курсы</h2>
        <div className="header-subtitle">Наши курсы для тебя, если ты хочешь:</div>
        <div className="row mt-5" >
          {
            [1, 2, 3].map((index) => <Courses key={index} />)
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
            mentor.map((item) => <Mentorscard {...item} key={item.id} />)
          }
        </div>
        </section>
        <section
          className="section bg-image__section jarallax"
          data-jarallax='{"speed": 0.2}'
          style={{
            backgroundImage: "url(https://bitlab.kz/images/75.jpg)",
            filter: "none",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center cta-Landsay mx-auto text-white">
                  <p className="cta-title mt-4 mb-4 font-weight-normal">
                    Знания - это актив, который невозможно потерять.
                  </p>
                  <div className="mt-4">
                    <a
                      className="btn btn-outline-custom btn-round font-weight-bold write_us"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      Получить знания
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="bg-overlay"></div> --> */}
        </section>
      </div>
      <div className={'modal__wrapper ' + (open ? 'modal-active' : '')}>
        <div onClick={OpenModal} className="modal-overlay"></div>
        <div className="modal">
          <div className="modal-header">
            <h1>Solid Academy</h1>
            <div onClick={OpenModal} className="modal-closeBtn">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z" fill="blue"></path>
            </svg>
            </div>
            
          </div>
          <form onSubmit={submit} className="modal__contact__form">
             <input value={user} onChange={(e)=> setUser(e.target.value)} placeholder="Имя"/>
             <input value={number} onChange={(e)=> setNumber(e.target.value)} placeholder="Номер"/>
             <div>
               <button className="btn btn-blue  modal--btn">Напишите нам</button>
             </div>
            </form>
        </div>
      </div>
    </div>
  );
}
