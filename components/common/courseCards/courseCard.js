import Link from "next/link";


export const Coursecard = ({ 
  leftColor, rightColor, duration, name, placesLeft, 
  timeStart, timeEnd, price, lessonsDay, start }) => {

  return (
    <div>
      <div className="cousers--card">
        <div style={{
          background: `linear-gradient(153.43deg, ${leftColor || "#ffe814"}, ${rightColor || "#e51686"} 83.33%)`}} className="card--preview">
          <i className="fab fa-python"></i>
          <div className="card--title">{name}<br /> </div>
          <div className="card--title card-sub-title">{price} сом/мес.</div>
        </div>
        <div className="card--description">
          <div className="description">
            <strong>Длительность: </strong>
            <p>{duration} месяцев</p>
          </div>
          <div className="description">
            <strong>Дата запуска: </strong>
            <p>{start} октября</p>
          </div>
          <div className="description">
            <strong>Дни уроков: </strong>
            <p>{lessonsDay}</p>
          </div>
          <div className="description">
            <strong>Время уроков: </strong>
            <p>{timeStart} - {timeEnd}</p>
          </div>
          <div className="description">
            <strong>Осталось: </strong>
            <p>{placesLeft} мест</p>
          </div>
        </div>
        <div className="card--more">
          {/* TODO: add to href id of course */}
          <Link href="/courses/1">
            <a className="btn btn-blue animate-y">Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

