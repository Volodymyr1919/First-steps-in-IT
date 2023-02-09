import React    from "react";
import phone    from "./Assets/phone.svg";
import message  from "./Assets/message.svg";
// eslint-disable-next-line no-unused-vars
import footer   from "./footer.scss";

export default function Footer() {
    return(
        <footer>
            <div className="footer__main">
                <h3 className="main__title">
                    Связь с нами
                </h3>
                <p className="main__text">
                    У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
                </p>
                <form action="#">
                    <div className="form__phone"><img src={phone} alt="" /> +7 (111) 222-33-44</div>
                    <div className="form__message"><img src={message} alt="" /> order@bu-one.ru</div>
                    <label htmlFor="name" className="form__labelName">
                        Имя
                        <input type="text" className="form__name" />
                    </label>
                    <label htmlFor="surname" className="form__labelSurname">
                        Фамилия
                        <input type="text" className="form__surname" />
                    </label>
                    <label htmlFor="message" className="form__labelMessage">
                        Сообщение
                        <input type="text" className="form__textMessage"/>
                    </label>
                    <button className="form__sendBtn">Отправить сообщение</button>
                </form>
            </div>
            
            <div className="footer__coppyrights">
                <p>2019 (с) Все права защищены. БухОне.ру</p>
                <p>Разработано: BuhOne</p>
            </div>
        </footer>
    )
}