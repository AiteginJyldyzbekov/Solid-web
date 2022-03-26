import { Reason } from "../common/reasons/reason";
import { Studystep } from "../common/studySteps/studyStep";
import { CoursePrice } from "../common/aboutCoursePrice/CoursePrice";
import CoursesMain from "../common/courses/coursesMain";
import Coursepageabout from './../common/coursePageAbout/coursePageAbout';
import { useState, useEffect } from 'react';
import { db } from "../../config/firebase.js"
import { useRouter } from "next/router";

export default function CoursePage() {

  const [reason, setReason] = useState([]);
  const [program, setProgram] = useState([]);
  const router = useRouter()
  const id = router.query.id

  useEffect(() => {
    db.collection(`courses/${id}/reasonList`).get().then((querySnapshot) => {
      const reasonsList = [];
      querySnapshot.forEach((doc) => {
        reasonsList.push({...doc.data(), id: doc.id})
      })
      setReason(reasonsList)
    });
    db.collection(`courses/${id}/program`).get().then((snaphot) => {
      const studyList = [];
      snaphot.forEach((doc) => {
        studyList.push({...doc.data(), id: doc.id})
      })
      setProgram(studyList)
    });
  }, [id])

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
            reason.map((reason) => <Reason {...reason} key={reason.id}/>)
          }
        </div>
      </section>
      <section className="study__course container">
        <h5 className="all--title">Программа курса</h5>
        <div className="study__steps__container">
          <div className="svg"></div>
          <div className="study__steps">
            {
              program.map((step) => <Studystep {...step} key={step.id}/>)
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