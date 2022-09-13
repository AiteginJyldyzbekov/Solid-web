import { CourseStart } from "../CourseStart/CourseStart";

const info = ["Старт курса :", "Длительность :", "Формат обучения :"];

export default function CoursesMain({ courseMain }) {
  return (
    <main className="d__main container">
      <div className="d__main__description">
        <h1>{courseMain?.name}</h1>
        <h3>{courseMain?.courseDef}</h3>
        <div className="header-btn d__main--connect">
          <div style={{ textAlign: "left" }}>
            {/* display: inline-block; padding: 18px 50px; font-size: 17px;
            border-radius: 10px; margin: 20px; z-index: 3; cursor: pointer;
            margin-top: 90px; */}
            <a
              href="#contact-us"
              style={{
                display: "inline-block",
                padding: "18px 50px",
                fontSize: "17px",
                borderRadius: "10px",
                margin: "20px",
                zIndex: 3,
                cursor: "pointer",
                marginTop: "90px",
              }}
              className="btn btn-blue animate-y"
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
      <div className="d__main__icon">
        <img src="/images/Business-meeting.svg" alt="#" />
      </div>
      <div className="d__main__info">
        <CourseStart title={info[0]} div={courseMain?.start} />
        <CourseStart title={info[1]} div={courseMain?.duration + " месяца"} />
        <CourseStart title={info[2]} div={courseMain?.format} />
      </div>
    </main>
  );
}
