
export default function Courses(){
  console.log('is work ?')


  return <div>
    <div className="row mt-5">
          <div className="col-md-4">
            <div className="service-box">
              <div className="services-icon">
                <i className="fad fa-chart-bar"></i>
              </div>
              <div className="mt-3">
                <p className="services-title mb-3">Быть в тренде</p>
                <p className="services-subtitle text-muted">Программисты всегда в тренде! Любой программист может себя
                  обеспечить работой, ведь они всегда востребованы!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="services-icon">
                <i className="fad fa-chart-pie"></i>
              </div>
              <div className="mt-3">
                <p className="services-title mb-3">Получить реальные знания</p>
                <p className="services-subtitle text-muted">В наших курсах вы не найдете ни капли воды! Только реальная
                  практика и жесткий кодинг!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="services-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="mt-3">
                <p className="services-title mb-3">Много зарабатывать</p>
                <p className="services-subtitle text-muted">Профессионалы своего дела зарабатывают свыше 100 000 сом/месяц. И
                  ты не исключение!</p>
              </div>
            </div>
          </div>
        </div>

    </div>
}