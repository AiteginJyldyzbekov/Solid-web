
import { useEffect, useState } from "react";
import { Coursecard } from "../common/courseCards/courseCard.js";
import { Mentorscard } from "../common/mentors/mentorsCard.jsx";
import { Courses } from "../common/aboutCourses/aboutCourses";
import { Timeline } from "../common/timeLine/timeLine.jsx";
import { db } from "../../config/firebase.js";
import { getDocs } from "firebase/firestore";

export default function HomePage() {
  const [offset, setOffset] = useState();
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  const [mentor, setMentor] = useState([]);
  
  useEffect(()=>{
    const colRef = db.collection("mentors")
    getDocs(colRef)
      .then((res) => {
        const mentors = []
        res.docs.forEach((doc) => {
          mentors.push({...doc.data(),id:doc.id})
        });
        setMentor(mentors)
      })
      .catch((err) => {
        console.log(err.message);
      });
},[])

  let courses = []
  let timeLineItem = []
  const [timeLine, setTimeLine] = useState(timeLineItem)
  const [course, setCourses] = useState(courses)
  useEffect(() => {
    db.collection("reason").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        timeLineItem.push(doc.data())
        setTimeLine(timeLineItem)
      })
    })
    db.collection("courses").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        courses.push(doc.data())
        setCourses(courses)
      });
    })
  }, [])
  
  
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
              <a
                id="write_us"
                href="#"
                className="btn btn-blue animate-y write_us"
              >
                Бесплатная консультация
              </a>
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
          <div className="header-subtitle">
            Выбери себе подходящий курс и стань программистом в следующих <br />
            направлениях
          </div>
          <div className="cousers__cards--container">
            {[
              { linearStart: "#13d524", linearEnd: "#ffdc18" },
              2,
              { linearStart: "#11c829", linearEnd: "#ffac10" },
            ].map((item) => (
              <Coursecard {...item} />
            ))}
          </div>
        </section>
        <section id="app" className="app container">
          <h2 className="courses-title">Почему выгодно обучаться у нас</h2>
          <div className="header-subtitle">
            Причины, по которым люди обучаются в нашей школе программирования
          </div>

          <div className="timeline-page mt-5">
            {timeline.map((item, index) => (
              <Timeline
                isOdd={(index + 1) % 2 === 0}
                des={item.des}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <section className="features container">
          <h2 className="courses-title">Для кого наши курсы</h2>
          <div className="header-subtitle">
            Наши курсы для тебя, если ты хочешь:
          </div>

          <div className="row mt-5">
            {[1, 2, 3].map(() => (
              <Courses />
            ))}
          </div>

          <br />
          <br />
          <div className="header-btn">
            <a id="write_us" className="btn btn-blue animate-y write_us">
              Запишите меня на ваши курсы!
            </a>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="container about">
          <h2 className="courses-title">
            Мы не просто школа программирования, мы <br /> академия с глобальной
            целью
            <span style={{ color: "#0accda", lineHeight: "40px" }}>
              стать фабрикой <br /> крутых программистов!
            </span>
          </h2>
          <div className="row mt-5">
            {mentor.map((item) => (
              <Mentorscard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
      <section className="courses container">
        <h2 className="courses-title">Ближайшие курсы</h2>
        <div className="header-subtitle">Выбери себе подходящий курс и стань программистом в следующих <br />направлениях</div>
        <div className="cousers__cards--container">
          {
            course.map((item) => <Coursecard {...item} key={item.id} leftColor={item.leftColor} rightColor={item.rightColor}/>)
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
            [1, 2, 3].map((index) => <Mentorscard key={index} />)
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
    </div>
  );
}
