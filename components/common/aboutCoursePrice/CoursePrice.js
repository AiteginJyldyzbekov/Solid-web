import emailjs from 'emailjs-com';
import { useRef } from 'react'

export const CoursePrice = ({ price, duration }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rs48o1i', 'template_5ic3rwk', form.current, 'Yi1ToeW6vTDnC8C2G')
    e.target.reset()
  };

  return <>
    <h1 className="all--title"> Стоимость курса </h1>
    <h1 className="all--title"> {price && duration ? price * duration : "40000"} сом </h1>
    <form className="contact__form" onSubmit={sendEmail} ref={form}>
      <h1 className="all--title"> Записаться на курс</h1>
      <input type="text" placeholder="Имя" name='sendername' />
      <input type="text" placeholder="Номер" name='sender-number' />
      <br />
      <li className="nav-item submit-btn" id="send-message">
        <button href="#" className="p20 nav-link btn btn-brighred animate-y">
          Записаться
        </button>
      </li>
    </form>
  </>
}