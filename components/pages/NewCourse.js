import { useState } from "react";
import { db } from "../../config/firebase";
import { useRouter } from "next/router";
import { languagesList } from "../constants/languageList";
export default function NewCourse() {
  const router = useRouter();
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
  const [format, setFormat] = useState("");
  const [logo, setLogo] = useState("");
  const [groupSet, setGroupSet] = useState(false)

  const submit = (e) => {
    const data = {
      leftColor: newLeftColor,
      rightColor: newRightColor,
      name: newName,
      price: newPrice,
      duration: newDuration,
      start: newStart,
      lessonsDay: newLessonDay,
      timeStart: newTimeStart,
      timeEnd: newTimeEnd,
      placesLeft: newPlacesLeft,
      logo: logo,
      format: format,
      isGroupActive: groupSet
    };
    e.preventDefault();
    db.collection("courses").doc().set(data);
    router.push("/admin/courses");
  }

  const handleClick = (index) => {
    setLogo(languagesList[index - 1])
  }

  console.log(groupSet);

  return (
    <div className="course-edit-wrapper">
      <form action="POST" onSubmit={submit} className="edit-form">
        <div className="languagesWrapper">
          {languagesList.map((lang) => (
            lang.lang === "ui-ux" ? <img onClick={(e) => handleClick(lang.id)} key={lang.id} style={{ cursor: "pointer" }}
              className={(logo.lang === lang.lang ? `activeLang ui_ux` : `ui_ux`)} src="/images/ui_ux.webp" alt="ui-ux"
            /> :
              lang.lang === "flutter" ? <img onClick={() => handleClick(lang.id)} key={lang.id} style={{ cursor: "pointer" }}
                className={(logo.lang === lang.lang ? `activeLang flutter` : `fluuter`)} src="/images/flutter.svg" alt="flutter"
              /> : <i onClick={(e) => handleClick(lang.id)} key={lang.id} style={{ cursor: "pointer" }}
                className={(logo.lang === lang.lang ? `activeLang fab ${lang.lang}` : `fab ${lang.lang}`)}></i>
          ))}
        </div>
        <div className="edit-label">
          leftColor
          <label htmlFor="leftcolor" className="color-picker">
            <div>
              <input
                onChange={(e) => {
                  setNewLeftColor(e.target.value);
                }}
                type="color"
                value={newLeftColor}
                id="leftcolor"
                placeholder="leftColor"
                required
              />
              {newLeftColor}
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
                value={newRightColor}
                required
                placeholder="right color"
              />
              {newRightColor}
            </div>
          </label>
        </div>
        <label className="edit-label">
          Name
          <input
            onChange={(e) => setNewName(e.target.value)}
            className="edit-input"
            type="text"
            id="name"
            placeholder="name"
            required
          />
        </label>
        <label className="edit-label">
          Price
          <input
            onChange={(e) => setNewPrice(e.target.value)}
            className="edit-input"
            type="number"
            required
            placeholder="price"
          />
        </label>
        <label className="edit-label">
          Duration
          <input
            onChange={(e) => setNewDuration(e.target.value)}
            className="edit-input"
            type="number"
            required
            placeholder="duration"
          />
        </label>
        <label className="edit-label">
          Start
          <input
            onChange={(e) => setNewStart(e.target.value)}
            className="edit-input"
            type="text"
            required
            placeholder="start"
          />
        </label>
        <label className="edit-label">
          LessonsDay
          <input
            onChange={(e) => setNewLessonDay(e.target.value)}
            className="edit-input"
            type="text"
            required
            placeholder="lessons day"
          />
        </label>
        <label className="edit-label">
          TimeStart
          <input
            onChange={(e) => setNewTimeStart(e.target.value)}
            className="edit-input"
            type="text"
            required
            placeholder="time start"
          />
        </label>
        <label className="edit-label">
          TimeEnd
          <input
            onChange={(e) => setNewTimeEnd(e.target.value)}
            className="edit-input"
            type="text"
            required
            placeholder="time end"
          />
        </label>
        <label className="edit-label">
          PlacesLeft
          <input
            onChange={(e) => setNewPlacesLeft(e.target.value)}
            className="edit-input"
            type="number"
            required
            placeholder="places left"
          />
        </label>
        <label className="edit-label">
          Формат обучения
          <textarea
            onChange={(e) => setFormat(e.target.value)}
            className="edit-input"
            placeholder="Формат обучения"
            type="text"
            required
          />
        </label>

        <label className="edit-label">
          Набор активен
          {/* <textarea
            onChange={(e) => setGroupSet(e.target.value)}
            className="edit-input"
            placeholder="true/false"
            type="text"
            required
          /> */}
          <button style={{display: "inline-block"}} onClick={() => setGroupSet(!groupSet)}>
            Набор активен: <h5 style={{display: "inline-block"}}>{groupSet === true? "да" : "нет"}</h5>
          </button>
        </label>
        <div className="card--more save-btn">
          <button className="btn btn-blue animate-y">Сохранить</button>
        </div>
      </form>

      <div>
        <div className="cousers--card">
          <div
            style={{
              background: `linear-gradient(153.43deg, ${newLeftColor}
              , ${newRightColor} 83.33%)`,
            }}
            className="card--preview"
          >
            {
              logo.lang ? <i className={`fab ${logo.lang}`}></i> : <i className="fab fa-react"></i>
            }
            <div className="card--title">
              {newName}
              <br />{" "}
            </div>
            <div className="card--title card-sub-title">
              {newPrice} сом/мес.
            </div>
          </div>
          <div className="card--description">
            <div className="description">
              <strong>Длительность: </strong>
              <p>{newDuration} месяцев</p>
            </div>
            <div className="description">
              <strong>Дата запуска: </strong>
              <p>{newStart}</p>
            </div>
            <div className="description">
              <strong>Дни уроков: </strong>
              <p>{newLessonDay}</p>
            </div>
            <div className="description">
              <strong>Время уроков: </strong>
              <p>
                {newTimeStart} - {newTimeEnd}
              </p>
            </div>
            <div className="description">
              <strong>Осталось: </strong>
              <p>{newPlacesLeft} мест</p>
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
