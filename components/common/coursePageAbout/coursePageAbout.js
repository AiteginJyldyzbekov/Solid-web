import { Courcescontainer } from "../courcesContainer/courcesContainer";
import { useState, useEffect } from 'react';
import { db } from "../../../config/firebase.js"
import { useRouter } from 'next/router'


const Coursepageabout = () => {

  const router = useRouter()
  const id = router.query.id
  const [course, setCourse] = useState(null)
  const [about, setAbout] = useState(null);

  console.log(course);

  useEffect(() => {
    db.collection(`courses/${id}/aboutCourseCard`)
      .get().then((snapshot) => {
        const cource = [];
        snapshot.forEach((doc) => {
          cource.push({ ...doc.data(), id: doc.id })
        })
        setCourse(cource)
      });
    db.collection(`courses/${id}/about`)
      .get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const res = doc.data()
          if (res) {
            setAbout({ ...res, id: doc.id })
          }
        })
      })
  }, [id])

  if (!about) return <div />
  return (
    <section className="about__course">
      <div>
        <h5 className="a__course--title all--title">{about.allTitle}</h5>
        <p className="a__course--des">
          {about.allDes}
          <br />
          <br />
          {about.des}
        </p>
      </div>
      <div className="a__courses container">
        {
          course.map((item) => <Courcescontainer {...item} key={item.id} />)
        }
      </div>
    </section>
  );
}

export default Coursepageabout;
