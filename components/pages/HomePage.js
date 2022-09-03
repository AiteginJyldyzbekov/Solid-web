import { useRef, useEffect, useState } from "react";
import { Coursecard } from "../common/courseCards/courseCard.js";
import { Mentorscard } from "../common/mentors/mentorsCard.jsx";
import { Courses } from "../common/aboutCourses/aboutCourses";
import { Timeline } from "../common/timeLine/timeLine.jsx";
import { db } from "../../config/firebase.js";
import emailjs from "emailjs-com";
import Preloader from "../common/preloader/Preloader.jsx";

export default function HomePage() {
  const [offset, setOffset] = useState();
  const [open, setOpen] = useState(false);

  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [timeLine, setTimeLine] = useState([]);
  const [course, setCourses] = useState([]);
  const [mentor, setMentor] = useState([]);
  const [whocanstudy, setwhocanstudy] = useState([]);
  const [isLoading, setLoading] = useState({
    timeLine: true,
    course: true,
    mentor: true,
    whocanstudy: true,
  });
  useEffect(() => {
    db.collection("reason")
      .get()
      .then((snapshot) => {
        const timeLineItem = [];
        snapshot.forEach((doc) => {
          timeLineItem.push(doc.data());
        });
        setTimeLine(timeLineItem);
        setLoading({ ...isLoading, timeLine: false });
      });
    db.collection("courses")
      .get()
      .then((querySnapshot) => {
        const courses = [];
        querySnapshot.forEach((doc) => {
          courses.push({ ...doc.data(), id: doc.id });
        });
        setCourses(courses);
        setLoading({ ...isLoading, course: false });
      });
    db.collection("mentors")
      .get()
      .then((snapshot) => {
        const mentors = [];
        snapshot.forEach((doc) => {
          mentors.push({ ...doc.data(), id: doc.id });
        });
        setMentor(mentors);
        setLoading({ ...isLoading, mentor: false });
      });
    db.collection("WhoCanStudy")
      .get()
      .then((snapshot) => {
        const whostudy = [];
        snapshot.docs.forEach((doc) => {
          whostudy.push({ ...doc.data(), id: doc.id });
        });
        setwhocanstudy(whostudy);
        setLoading({ ...isLoading, whocanstudy: false });
      });
  }, []);
  const OpenModal = () => {
    setOpen(!open);
  };

  const form = useRef();
  const submit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_homepage",
      "template_laiog88",
      form.current,
      "Yi1ToeW6vTDnC8C2G"
    );
    e.target.reset();
  };
  const loading =
    isLoading.timeLine &&
    isLoading.course &&
    isLoading.mentor &&
    isLoading.whocanstudy;

  if (loading) return <Preloader full />;
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
          <div className="header-subtitle">
            Выбери себе подходящий курс и стань программистом в следующих <br />
            направлениях
          </div>
          <div className="cousers__cards--container">
            {course.map((item) => (
              <Coursecard
                {...item}
                key={item.id}
                leftColor={item.leftColor}
                rightColor={item.rightColor}
              />
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="container" />
        <br />
        <br />
        <br />
        <section id="app" className="app container">
          <h2 className="courses-title">Почему выгодно обучаться у нас</h2>
          <div className="header-subtitle">
            Причины, по которым люди обучаются в нашей школе программирования
          </div>
          <div className="timeline-page mt-5">
            {timeLine.map((item, index) => (
              <Timeline key={item.id} isOdd={(index + 1) % 2 === 0} {...item} />
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="container" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="features container">
          <h2 className="courses-title">Для кого наши курсы</h2>
          <div className="header-subtitle">
            Наши курсы для тебя, если ты хочешь:
          </div>
          <div className="row mt-5">
            {whocanstudy.map((item) => (
              <Courses key={item.id} {...item} />
            ))}
          </div>
          <br />
          <br />
          <div className="header-btn">
            <a
              id="write_us"
              className="btn btn-blue animate-y write_us"
              onClick={OpenModal}
            >
              Запишите меня на ваши курсы!
            </a>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <hr className="container" />
        <br />
        <br />
        <br />
        <br />
        <section className="container about">
          <h2 className="courses-title">
            Мы не просто школа программирования, мы <br /> академия с глобальной
            целью
            <span style={{ color: "#0accda", lineHeight: "40px" }}>
              {" "}
              стать фабрикой <br /> крутых программистов!
            </span>
          </h2>
          <div className="row mt-5">
            {mentor.map((item) => (
              <Mentorscard {...item} key={item.id} />
            ))}
          </div>
        </section>
        <section
          className="section bg-image__section jarallax"
          data-jarallax='{"speed": 0.2}'
          style={{
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
                      onClick={OpenModal}
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
      <div className={"modal__wrapper " + (open ? "modal-active" : "")}>
        <div onClick={OpenModal} className="modal-overlay"></div>
        <div className="modal">
          <div>
            <img
              style={{ width: "455px", height: "100%" }}
              src="/images/gif.gif"
              alt="giphy"
            />
          </div>
          <div className="modal__right">
            <form className="modal__contact__form" onSubmit={submit} ref={form}>
              <h2 style={{ marginBottom: "20px" }}>Записаться на курсы</h2>
              <input type="text" placeholder="Имя" name="name" />
              <input type="text" placeholder="Номер" name="number" />
              <div className="modal-btn-wrapper">
                <button className="btn  modal--btn">Хочу учиться</button>
                <button className="no_btn" onClick={OpenModal}>
                  Нет, спасибо
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// delete after
