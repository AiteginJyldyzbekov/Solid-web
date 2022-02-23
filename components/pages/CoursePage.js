
import { Reason } from '../common/reasons/reason';
import { Studystep } from '../common/studySteps/studyStep';
import { Courcescontainer } from './../common/courcesContainer/courcesContainer';
import { CourseStart } from "../common/CourseStart/CourseStart";

export default function CoursePage() {

  const cource = [
    {
      img: "https://t3.ftcdn.net/jpg/00/79/08/58/360_F_79085813_SqXUh2uofBgenkzzzuHXMnp2fBx1UNhm.jpg",
      title: "Учим актуальным технологиям",
      desc: "Сможешь пойти и во Frontend, и в Backend, React, Redux, Node.js, Expres.js, SPA: с навыками использования таких технологий тебе подойдет 90% вакансий JavaScript-разработчиков на рынке",
    },
    {
      img: "https://t3.ftcdn.net/jpg/00/79/08/58/360_F_79085813_SqXUh2uofBgenkzzzuHXMnp2fBx1UNhm.jpg",
      title: "Проектный подход к обучению.",
      desc: "Solid Academy не учеба в привычном понимании.  Весь процесс обучения построен на проектном подходе к обучению. Каждый урок будет сопровождаться практикой над реальными проектами.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/00/79/08/58/360_F_79085813_SqXUh2uofBgenkzzzuHXMnp2fBx1UNhm.jpg",
      title: "Индивидуальный учебный план",
      desc: "Ваш учебный будет содержать все необходимые темы, уроки и сотни интересных заданий, необходимые для достижения вашей цели. Созданный с учетом ваших навыков и знаний.",
    },
  ]

  const reasonsList = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Хороший заработок. По данным Headz Analytics, средняя зарплата у JS разработчика 172 т. руб."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Огромное количество вакансий, так как около трети вакансий в IT, требуют знания JavaScript"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "JavaScript прост для освоения даже для новичков в программировании"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU",
      text: "Возможность пойти и во FrontEnd, и в BackEnd разработку"
    },
  ]

  const studyList = [
    {
      name: "Введение в JavaScript и настройка инструментов для разработки",
      description: "Инструментарий и настройка проекта; NodeJs, Git, WebPack, Npm",
    },
    {
      name: "Библиотека ReactJS",
      description: "Компоненты ReactJS, свойства, состояния, хуки, контекстный API, формы, безопасность JWT и.т.д.",
    },
    {
      name: "Среда тестирования Jest",
      description: "Повышение качества JS приложения; введение в Jest; настройка тестового окружения; Unit test; Ui test",
    },
    {
      name: "Программная платформа Node.js",
      description: "Экосистема Node.js; Back-End фреймворк Express.js; Базы данныхMongoDB",
    },
  ]


    const coursesStart = [ 
    {
      h4: "Старт курса : ",
      div: "7 июня",
    },{
      h4: "Длительность : ",
      div: "4 месяца",
    },
    {
      h4:"Формат обучения : ",
      div: "офлайн-обучение с преподавателем на реальных проектах + онлайн разбор задачек с проверкой и обратной связью"
    }
  ]
    
  return (
    <div>
      <main className="d__main container">
        <div className="d__main__description">
          <h1>Fullstack-разработчик на JavaScript</h1>
          <h3>Учись под руководством профессионалов из индустрии и стань востребованным специалистом</h3>
          <div className="header-btn d__main--connect">
            <a href="#contact-us" className="btn btn-blue animate-y ">Записаться</a>
          </div>
        </div>
        <div className="d__main__icon">
          <img src="/images/Business-meeting.svg" alt="#" />
        </div>
        <div className="d__main__info"> 
          {
          coursesStart.map((item) => <CourseStart {...item} key={item.id} />)
          }
      </div>
      </main>
      <section className="about__course">
        <div>
          <h5 className="a__course--title all--title">О курсе и профессии</h5>
          <p className="a__course--des">Пройди наш курс и стань профессиональным разработчиком на JavaScript
            <br />
            <br />
            На курсе ты прокачаешь навыки программирование и получишь знания по самым сложным концепциям и принципам JavaScript</p>
        </div>
        <div className="a__courses container">
          {
            cource.map((item) => <Courcescontainer {...item} key={item.id} />)
          }
        </div>
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
        <h1 className="all--title">Стоимость курса</h1>
        <h1 className="all--title">28 000 сом</h1>
        <form className="contact__form">
          <h1 className="all--title">Записаться на курс</h1>
          <input type="text" id="sender-name" placeholder="Имя" />
          <input type="text" id="sender-number" placeholder="Номер" />
          <br />
          <li className="nav-item submit-btn" id="send-message">
            <a href="#" className="p20 nav-link btn btn-brighred animate-y"
            >Записаться </a
            >
          </li>
        </form>
      </section>
    </div>
  )
}
