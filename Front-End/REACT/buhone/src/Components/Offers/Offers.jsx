import React    from "react";
// eslint-disable-next-line no-unused-vars
import offers   from "./offers.scss"

export default function Offers() {
    let offersItems = [
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
        {
            title: 'Бухгалтерское обслуживание',
            buttonText: 'Подробнее'
        },
    ]
    return(
        <section className="offers">
            <p className="offers__subtitle">Наши услуги</p>
            <h3 className="offers__title">Мы специализируемся</h3>
            <div className="offers__description">
                {offersItems.map(item => (
                    <div className="description__block">
                        <h4 className="block__title">{item.title}</h4>
                        <button className="block__button">{item.buttonText}</button>
                    </div>
                ))}
            </div>
        </section>
    );
}