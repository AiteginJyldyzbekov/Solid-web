import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { useRouter } from "next/router";
import { Coursecard } from "../common/courseCards/courseCard.js";
import { languagesList } from "../constants/languageList";

export default function CourseEdit() {
  const router = useRouter();
  const id = router.query.id;
  const [course, setCourses] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newLessonDay, setNewLessonDay] = useState("");
  const [newTimeStart, setNewTimeStart] = useState("");
  const [newTimeEnd, setNewTimeEnd] = useState("");
  const [newPlacesLeft, setNewPlacesLeft] = useState("");
  const [newLeftColor, setNewLeftColor] = useState("");
  const [newRightColor, setNewRightColor] = useState("");
  const [active, setActive] = useState(false);
  const [format, setFormat] = useState("");
  const [logo, setLogo] = useState("");
  const [groupSet, setGroupSet] = useState(false)
  const [newIsActiveCourse, setIsActiveCourse] = useState("")
  const [totalPrice, setTotalPrice] = useState()
  const [proccent, setProccent] = useState()


  useEffect(() => {
    db.collection("courses")
      .get()
      .then((snapshot) => {
        const courses = [];
        snapshot.forEach((doc) => {
          courses.push({ ...doc.data(), id: doc.id });
        });
        courses.forEach((e) => {
          if (e.id === id) {
            setCourses(e);
            setFormat(e?.format)
            setNewName(e.name)
            setNewLeftColor(e.leftColor)
            setNewRightColor(e.rightColor)
            setNewLessonDay(e.lessonsDay)
            setNewPlacesLeft(e.placesLeft)
            setNewPrice(e.price)
            setNewDuration(e.duration)
            setNewStart(e.start)
            setNewTimeEnd(e.timeEnd)
            setNewTimeStart(e.timeStart)
            setLogo(e.logo)
            setIsActiveCourse(e.isActive)
            setTotalPrice(e.totalPrice)
          }
        });
      });
  }, []);
  const {
    leftColor,
    rightColor,
    isActive,
    vtotalPrice,
    duration,
    name,
    placesLeft,
    timeStart,
    timeEnd,
    price,
    lessonsDay,
    start,

  } = course;

  let data = {
    leftColor: newLeftColor,
    rightColor: newRightColor,
    isActive: newIsActiveCourse,
    vtotalPrice: totalPrice,
    format: format,
    name: newName,
    price: newPrice,
    duration: newDuration,
    lessonsDay: newLessonDay,
    start: newStart,
    timeStart: newTimeStart,
    timeEnd: newTimeEnd,
    placesLeft: newPlacesLeft,
    logo: logo,
    isGroupActive: groupSet
  }

  const submit = () => {
    alert("Изменения сохранены!")
    for (let key in data) {
      if (data[key]) {
        db.collection("courses").doc(id).update({ [key]: data[key] })
        setActive(true)
        setTimeout(() => {
          setActive(false)
        }, 6000)
      }
    }
  };


  const priceCount = (e) => {
    setProccent(e.target.value)
    const totalProccent = proccent / 100
    setTotalPrice(newPrice - newPrice * totalProccent)
    console.log(newPrice)
    console.log(proccent)

  }


  const handleClick = (index) => {
    setLogo(languagesList[index - 1])
  }

  return (
    <div className="course-edit-wrapper container">
      <div onClick={() => { setActive(false) }} className={"card-update " + (active ? "active" : "")}>
        <span>Card updated</span>
      </div>
      <form onSubmit={submit} className="edit-form">
        <div className="languagesWrapper">
          {languagesList.map((lang) => (
            <i onClick={() => handleClick(lang.id)} key={lang.id} style={{ cursor: "pointer" }} className={(logo.lang === lang.lang ? `activeLang fab ${lang.lang}` : `fab ${lang.lang}`)}></i>
          ))}
        </div>
        <div className="edit-label">
          leftColor
          <label className="color-picker">
            <div>
              <input
                onChange={(e) => {
                  setNewLeftColor(e.target.value);
                }}
                type="color"
                placeholder="left color"
                value={newLeftColor || leftColor}
              />
              {newLeftColor || leftColor}
            </div>
          </label>
        </div>
        <div className="edit-label">
          RightColor
          <label className="color-picker">
            <div>
              <input
                onChange={(e) => {
                  setNewRightColor(e.target.value);
                }}
                placeholder="right color"
                type="color"
                value={newRightColor || rightColor}
              />
              {newRightColor || rightColor}
            </div>
          </label>
        </div>
        <label className="edit-label">
          Name
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewName(" ")
              } else {
                setNewName(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            placeholder="name"
            value={newName || name}
          />
        </label>
        <label className="edit-label">
          Price
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewPrice(" ")
              } else {
                setNewPrice(e.target.value)
              }
            }}
            className="edit-input"
            placeholder="price"
            type="number"
            value={newPrice || price}
          />
        </label>
        <label className="edit-label">
          Proccent
          <input
            className="edit-input"
            placeholder="Proccent"
            type="number"
            value={proccent}
            onChange={(e) => priceCount(e)}
          />
        </label>
        <label className="edit-label">
          Total Price
          {/* <input
            className="edit-input"
            placeholder="price"
            type="number"
            value={totalPrice}
          /> */}
          <h1>{totalPrice}</h1>
        </label>
        <label className="edit-label">
          Duration
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewDuration(" ")
              }
              else {
                setNewDuration(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            placeholder="duration"
            value={newDuration || duration}
          />
        </label>
        <label className="edit-label">
          Start
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewStart(" ")
              }
              else {
                setNewStart(e.target.value)
              }
            }}
            className="edit-input"
            placeholder="start"
            type="edit"
            value={newStart || start}
          />
        </label>
        <label className="edit-label">
          LessonsDay
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewLessonDay(" ")
              }
              else {
                setNewLessonDay(e.target.value)
              }
            }}
            className="edit-input"
            placeholder="lessons day"
            type="text"
            value={newLessonDay || lessonsDay}
          />
        </label>
        <label className="edit-label">
          TimeStart
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewTimeStart(" ")
              }
              else {
                setNewTimeStart(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            placeholder="time start"
            value={newTimeStart || timeStart}
          />
        </label>
        <label className="edit-label">
          TimeEnd
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewTimeEnd(" ")
              }
              else {
                setNewTimeEnd(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            placeholder="time end"
            value={newTimeEnd || timeEnd}
          />
        </label>
        <label className="edit-label">
          PlacesLeft
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setNewPlacesLeft(" ")
              }
              else {
                setNewPlacesLeft(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            placeholder="places left"
            value={newPlacesLeft || placesLeft}
          />
        </label>
        <label className="edit-label">
          Формат обучения
          <textarea
            onChange={(e) => setFormat(e.target.value)}
            className="text-area-format"
            type="text"
            placeholder="формат обучения"
            value={format}
            required
          />
        </label>
        <label className="edit-label">
          Курс:
          <select className="text-area-format" onChange={(e) => setIsActiveCourse(e.target.value)} value={newIsActiveCourse}>
            <option>Активен</option>
            <option>Не активен</option>
          </select>
        </label>

        <div className="card--more save-btn">
          <a onClick={submit} className="btn btn-blue animate-y">
            Сохранить
          </a>
        </div>
      </form>

      <div>
        <Coursecard {...data} />
      </div>
    </div>
  );
}
