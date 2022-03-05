import { CourseStart } from "../CourseStart/CourseStart";
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from "../../../config/firebase.js"

export default function CoursesMain() {
  
  const [courseMain, setCourseMain] = useState([]);
  const [courseStart, setCourseStart] = useState([]);

  useEffect(() => {
    const start = [];
    db.collection("coursesMain").get().then((snapshott) => {
      snapshott.forEach((doc) => {
        start.push(doc.data())
      })
      setCourseStart(start)
    });
    db.collection("mainContainer").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        setCourseMain(doc.data())
      })
    })
  }, [])

  return (
    <main className="d__main container">
      <div className="d__main__description">
        <h1>{courseMain.h1}</h1>
        <h3>
          {courseMain.h3}
        </h3>
        <div className="header-btn d__main--connect">
          <a href="#contact-us" className="btn btn-blue animate-y ">
            {courseMain.contact}
          </a>
        </div>
      </div>
      <div className="d__main__icon">
        <img src="/images/Business-meeting.svg" alt="#" />
      </div>
      <div className="d__main__info">
        {courseStart.map((item) => (
          <CourseStart key={item.h4} h4={item.h4} div={item.div} />
        ))}
      </div>
    </main>
  );
}
