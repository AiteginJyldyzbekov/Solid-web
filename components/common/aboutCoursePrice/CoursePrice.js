
export const CoursePrice = () => {
    
return <>
    <h1 className="all--title"> Стоимость курса </h1>
    <h1 className="all--title"> 28000 сом </h1>
    <form className="contact__form" >
        <h1 className="all--title"> Записаться на курс</h1>
        <input type="text" id="sender-name" placeholder="Имя"  />
        <input type="text" id="sender-number" placeholder="Номер" />
        <br />
        <li className="nav-item submit-btn" id="send-message">
        <a href="#" className="p20 nav-link btn btn-brighred animate-y"> 
        Записаться </a>
        </li>
    </form>
    </>
}