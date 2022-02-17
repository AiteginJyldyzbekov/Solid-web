
export const Coursecard = ({ linearStart, linearEnd }) => {
  return (
    <div>
      <div className="cousers--card">
        <div style={{
          background: `linear-gradient(153.43deg, ${linearStart || "#ffe814"}, ${linearEnd || "#e51686"} 83.33%)`
        }} className="card--preview">
          <i className="fab fa-python"></i>
          <div className="card--title">Frontend разработка <br /> JavaScript/React.js</div>
          <div className="card--title card-sub-title">7000 сом/мес.</div>
        </div>
        <div className="card--description">
          <div className="description">
            <strong>Длительность: </strong>
            <p>6 месяцев</p>
          </div>
          <div className="description">
            <strong>Дата запуска: </strong>
            <p>20 октября</p>
          </div>
          <div className="description">
            <strong>Дни уроков: </strong>
            <p>Вт-Чт-Сб</p>
          </div>
          <div className="description">
            <strong>Время уроков: </strong>
            <p>18:00 - 20:00</p>
          </div>
          <div className="description">
            <strong>Осталось: </strong>
            <p>5 мест</p>
          </div>
        </div>
        <div className="card--more">
          <a href="/react.html" className="btn btn-blue animate-y">Подробнее</a>
        </div>
      </div>
    </div>
  );
}

