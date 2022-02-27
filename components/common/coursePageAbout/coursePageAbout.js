import { Courcescontainer } from "../courcesContainer/courcesContainer";
import { useState, useEffect } from 'react';
import { db } from "../../../config/firebase.js"

const Coursepageabout = () => {

  const [course, setCourse] = useState([])
  const [about, setAbout] = useState([])
  useEffect(() => {
    const cource = [];
    db.collection("courses/DxZD1SQskccJswOkGIYE/aboutCourseCard/")
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        cource.push(doc.data())
      })
      setCourse(cource)
    });
    db.collection("courses/DxZD1SQskccJswOkGIYE/about/")
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        setAbout(doc.data())
      })
    })
  }, [])

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
