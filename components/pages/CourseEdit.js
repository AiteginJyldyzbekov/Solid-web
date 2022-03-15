import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { useRouter } from "next/router";

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
          }
        });
      });
  }, []);
  const {
    leftColor,
    rightColor,
    duration,
    name,
    placesLeft,
    timeStart,
    timeEnd,
    price,
    lessonsDay,
    start,
  } = course;
 
  
    

  const submit = () => {
    let data = {
    leftColor: newLeftColor,
    rightColor: newRightColor,
    name: newName,
    price: newPrice,
    duration: newDuration,
    lessonsDay: newLessonDay,
    start: newStart,
    timeStart: newTimeStart,
    timeEnd: newTimeEnd,
    placesLeft: newPlacesLeft,
    }
   for(let key in data){
     if(data[key]){
      db.collection("courses").doc(id).update({[key]: data[key]})
      setActive(true)
      setTimeout(()=>{
        setActive(false)
      },6000)
     }
     
   }
  };
  
  return (
    <div className="course-edit-wrapper container">
      <div onClick={()=>{setActive(false)}} className={"card-update " + (active ? "active" : "")}>
        <span>Card updated</span>
      </div>
      <form onSubmit={submit} className="edit-form">
        <div className="edit-label">
          leftColor
          <label className="color-picker">
            <div>
              <input
                onChange={(e) => {
                  setNewLeftColor(e.target.value);
                }}
                type="color"
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
              if(e.target.value === ""){
                setNewName(" ")
              }else{
                setNewName(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            value={newName || name}
          />
        </label>
        <label className="edit-label">
          Price
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewPrice(" ")
              }else{
                setNewPrice(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            value={newPrice || price}
          />
        </label>
        <label className="edit-label">
          Duration
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewDuration(" ")
              }
              else{
                setNewDuration(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            value={newDuration || duration}
          />
        </label>
        <label className="edit-label">
          Start
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewStart(" ")
              }
              else{
                setNewStart(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            value={newStart || start}
          />
        </label>
        <label className="edit-label">
          LessonsDay
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewLessonDay(" ")
              }
              else{
                setNewLessonDay(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            value={newLessonDay || lessonsDay}
          />
        </label>
        <label className="edit-label">
          TimeStart
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewTimeStart(" ")
              }
              else{
                setNewTimeStart(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            value={newTimeStart || timeStart}
          />
        </label>
        <label className="edit-label">
          TimeEnd
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewTimeEnd(" ")
              }
              else{
                setNewTimeEnd(e.target.value)
              }
            }}
            className="edit-input"
            type="text"
            value={newTimeEnd || timeEnd}
          />
        </label>
        <label className="edit-label">
          PlacesLeft
          <input
            onChange={(e) => {
              if(e.target.value === ""){
                setNewPlacesLeft(" ")
              }
              else{
                setNewPlacesLeft(e.target.value)
              }
            }}
            className="edit-input"
            type="number"
            value={newPlacesLeft || placesLeft}
          />
        </label>
        <div className="card--more save-btn">
          <a onClick={submit} className="btn btn-blue animate-y">
            Сохранить
          </a>
        </div>
      </form>

      <div>
        <div className="cousers--card">
          <div
            style={{
              background: `linear-gradient(153.43deg, ${
                newLeftColor || leftColor
              }
              , ${newRightColor || rightColor} 83.33%)`,
            }}
            className="card--preview"
          >
            <i className="fab fa-python"></i>
            <div className="card--title">
              {newName || name}
              <br />{" "}
            </div>
            <div className="card--title card-sub-title">
              {newPrice || price} сом/мес.
            </div>
          </div>
          <div className="card--description">
            <div className="description">
              <strong>Длительность: </strong>
              <p>{newDuration || duration} месяцев</p>
            </div>
            <div className="description">
              <strong>Дата запуска: </strong>
              <p>{newStart || start} октября</p>
            </div>
            <div className="description">
              <strong>Дни уроков: </strong>
              <p>{newLessonDay || lessonsDay}</p>
            </div>
            <div className="description">
              <strong>Время уроков: </strong>
              <p>
                {newTimeStart || timeStart} - {newTimeEnd || timeEnd}
              </p>
            </div>
            <div className="description">
              <strong>Осталось: </strong>
              <p>{newPlacesLeft || placesLeft} мест</p>
            </div>
          </div>
          <div disabled={true} className="card--more">
            <a className="btn btn-blue animate-y">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
}
