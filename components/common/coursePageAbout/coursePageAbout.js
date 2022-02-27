import { Courcescontainer } from "../courcesContainer/courcesContainer";
import { useState, useEffect } from 'react';
import { db } from "../../../config/firebase.js"
import { useRouter } from 'next/router'


const Coursepageabout = () => {

  const router = useRouter()
  const id = router.query.id
  console.log(id)
  const [course, setCourse] = useState([])
  const [about, setAbout] = useState([])
  useEffect(() => {
    const cource = [];
    db.collection(`courses/${id}/aboutCourseCard`)
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        cource.push(doc.data())
      })
      setCourse(cource)
    });
    db.collection(`courses/${id}/about`)
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        setAbout(doc.data())
      })
    })
  }, [])
  console.log(course)

  return (
    <>
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
    </>
  );
}

export default Coursepageabout;
