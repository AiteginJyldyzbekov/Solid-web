import { Reason } from "../common/reasons/reason";
import { Studystep } from "../common/studySteps/studyStep";
import { CoursePrice } from "../common/aboutCoursePrice/CoursePrice";
import CoursesMain from "../common/courses/coursesMain";
import Coursepageabout from './../common/coursePageAbout/coursePageAbout';


export default function CoursePage() {

  const reasonsList = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Хороший заработок. По данным Headz Analytics, средняя зарплата у JS разработчика 172 т. руб.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Огромное количество вакансий, так как около трети вакансий в IT, требуют знания JavaScript",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "JavaScript прост для освоения даже для новичков в программировании",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Возможность пойти и во FrontEnd, и в BackEnd разработку",
    },
  ];
  const studyList = [
    {
      name: "Введение в JavaScript и настройка инструментов для разработки",
      description: "Инструментарий и настройка проекта; NodeJs, Git, WebPack, Npm",
    },
    {
      name: "Библиотека ReactJS",
      description:
      "Компоненты ReactJS, свойства, состояния, хуки, контекстный API, формы, безопасность JWT и.т.д.",
    },
    {
      name: "Среда тестирования Jest",
      description:
      "Повышение качества JS приложения; введение в Jest; настройка тестового окружения; Unit test; Ui test",
    },
    {
      name: "Программная платформа Node.js",
      description:
      "Экосистема Node.js; Back-End фреймворк Express.js; Базы данныхMongoDB",
    },
  ];
  
  return (
    <div>
      <CoursesMain/>
      <section className="about__course">
      <Coursepageabout />
      </section>
      <section className="why__block">
        <h6 className="all--title">Зачем изучать JavaScript</h6>
        <div className="why__reason">
          {
            reasonsList.map((reason) => <Reason {...reason} key={reason.id}/>)
          }
        </div>
      </section>
      <section className="study__course container">
        <h5 className="all--title">Программа курса</h5>
        <div className="study__steps__container">
          <div className="svg"></div>
          <div className="study__steps">
            {
              studyList.map((step) => <Studystep {...step} key={step.id}/>)
            }
          </div>
        </div>
      </section>
      <section id="contact-us" className="contact-us">
        <CoursePrice />
      </section>
    </div>
  );
}
