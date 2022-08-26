import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";

export default function Footer() {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    db.collection("footer")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setFooter({ ...doc.data(), id: doc.id });
        });
      });
  }, []);

  return (
    <footer className="footer container">
      <div>
        <ul className="contact">
          <li>
            <i className="fas fa-envelope"></i>: {footer.mail}
          </li>
          <li>
            <i className="fas fa-mobile"></i>:{" "}
            <a href={"tel:" + footer.phone1}>{footer.phone1}</a>
          </li>
          <li>
            <i className="fas fa-mobile"></i>:{" "}
            <a href={"tel:" + footer.phone2}>{footer.phone2}</a>
          </li>
          <li>
            <i className="fas fa-map-pin"></i>: {footer.adress}
          </li>
        </ul>
        <div className="social-medias">
          <a href={footer.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" href={footer.telegram}>
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
      <div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a46dde9094e87a833ddc0331998bb8cbeca645c2482f5c1ef12df2d9659d104&amp;source=constructor"
          width="373"
          height="265"
          frameBorder="0"
        ></iframe>
      </div>
    </footer>
  );
}
