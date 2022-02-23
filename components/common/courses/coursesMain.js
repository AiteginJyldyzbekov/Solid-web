import { CourseStart } from "../CourseStart/CourseStart";

export default function CoursesMain() {
  const coursesStart = [
    {
      h4: "Старт курса : ",
      div: "7 июня",
    },
    {
      h4: "Длительность : ",
      div: "4 месяца",
    },
    {
      h4: "Формат обучения : ",
      div: "офлайн-обучение с преподавателем на реальных проектах + онлайн разбор задачек с проверкой и обратной связью",
    },
  ];
  return (
    <main className="d__main container">
      <div className="d__main__description">
        <h1>Fullstack-разработчик на JavaScript</h1>
        <h3>
          Учись под руководством профессионалов из индустрии и стань
          востребованным специалистом
        </h3>
        <div className="header-btn d__main--connect">
          <a href="#contact-us" className="btn btn-blue animate-y ">
            Записаться
          </a>
        </div>
      </div>
      <div className="d__main__icon">
        <img src="/images/Business-meeting.svg" alt="#" />
      </div>
      <div className="d__main__info">
        {coursesStart.map((item) => (
          <CourseStart {...item} />
        ))}
      </div>
    </main>
  );
}
