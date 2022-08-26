import { CourseStart } from "../CourseStart/CourseStart";
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from "../../../config/firebase.js"

const info = ["Старт курса :", "Длительность :", "Формат обучения :"]

export default function CoursesMain({ courseMain }) {
  return (
    <main className="d__main container">
      <div className="d__main__description">
        <h1>{courseMain?.name}</h1>
        <h3>
          {courseMain?.courseDef}
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
        <CourseStart title={info[0]} div={courseMain?.price + " сом"} />
        <CourseStart title={info[1]} div={courseMain?.duration + " месяца"} />
        <CourseStart title={info[2]} div={courseMain?.format} />
      </div>
    </main>
  );
}
