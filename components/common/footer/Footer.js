
export default function Footer() {
  return <footer className="footer container">
    <div>
      <ul className="contact">
        <li>
          <i className="fas fa-envelope"></i>
          : solid.academy.kg@gmail.com
        </li>
        <li>
          <i className="fas fa-mobile"></i>
          : <a href="tel:+996 501 55 79 03">+996 501 55 79 03</a>
        </li>
        <li>
          <i className="fas fa-mobile"></i>
          : <a href="tel:+996 501 55 79 03">+996 707 62 96 17</a>
        </li>
        <li>
          <i className="fas fa-map-pin"></i>
          : г. Бишкек, ул. Ахунбаева 119а, 0-этаж, 3 каб.
        </li>
      </ul>
      <div className="social-medias">
        <a href="https://www.instagram.com/solid.kg/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-telegram"></i>
        </a>
      </div>
    </div>
    <div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a46dde9094e87a833ddc0331998bb8cbeca645c2482f5c1ef12df2d9659d104&amp;source=constructor"
        width="373" height="265" frameBorder="0"></iframe>
    </div>
  </footer>;
}
