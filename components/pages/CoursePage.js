import { Reason } from "../common/reasons/reason";
import { Studystep } from "../common/studySteps/studyStep";
import { CoursePrice } from "../common/aboutCoursePrice/CoursePrice";
import CoursesMain from "../common/courses/coursesMain";
import Coursepageabout from './../common/coursePageAbout/coursePageAbout';
import { useState, useEffect } from 'react';
import { db } from "../../config/firebase.js"
import { useRouter } from "next/router";
import Preloader from "../common/preloader/Preloader.jsx";

export default function CoursePage() {

  const [courseMain, setCourseMain] = useState(null);
  const [reason, setReason] = useState([]);
  const [program, setProgram] = useState([]);
  const [isLoading, setLoading] = useState({
    courceMain: true,
    reason: true,
    program: true,
  });
  const router = useRouter()
  const id = router.query.id

  useEffect(() => {
    db.collection("courses").doc(id).get().then((snapshot) => {
      const res = snapshot.data();
      setCourseMain(res);
      setLoading({ ...isLoading, courceMain: false });
    })
    db.collection(`courses/${id}/reasonList`).get().then((querySnapshot) => {
      const reasonsList = [];
      querySnapshot.forEach((doc) => {
        reasonsList.push({ ...doc.data(), id: doc.id })
      })
      setReason(reasonsList)
      setLoading({ ...isLoading, reason: false });
    });
    db.collection(`courses/${id}/program`).get().then((snaphot) => {
      const studyList = [];
      snaphot.forEach((doc) => {
        studyList.push({ ...doc.data(), id: doc.id })
      })
      setProgram(studyList)
      setLoading({ ...isLoading, program: false });
    });
  }, [id])

  const loading = isLoading.courceMain && isLoading.reason && isLoading.program;

  if(loading) return <Preloader full />
  console.log(courseMain);

  return (
    <div>
      <CoursesMain courseMain={courseMain} />

      <Coursepageabout />
      {
        reason.length
          ? <section className="why__block">
            <h6 className="all--title">{courseMain.whyLearn}</h6>
            <div className="why__reason">
              {
                reason.map((reason) => <Reason {...reason} key={reason.id} />)
              }
            </div>
          </section>
          : null
      }

      {
        program.length
          ? <section className="study__course container">
            <h5 className="all--title">Программа курса</h5>
            <div className="study__steps__container">
              <div className="svg"></div>
              <div className="study__steps">
                {
                  program.map((step) => <Studystep {...step} key={step.id} />)
                }
              </div>
            </div>
          </section>
          : null
      }

      <section id="contact-us" className="contact-us">
        <CoursePrice {...courseMain} />
      </section>
    </div>
  );
}