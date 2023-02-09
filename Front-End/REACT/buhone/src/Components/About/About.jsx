import React, { useState, useEffect }   from "react";
// eslint-disable-next-line no-unused-vars
import about                            from "./about.scss";

export default function About() {

    const [achievementsNum, setAchievementsNum]       = useState("90");
    const [achievementsText, setAchievementsText]     = useState("Завершено крупных сделок");
    // eslint-disable-next-line no-unused-vars
    const [textButton, setTextButton]                 = useState("Подробнее");

    function changeNum(e) {
        setAchievementsNum(e.target.value);
    }

    function changeText(e) {
        setAchievementsText(e.target.value);
    }

    let achievementsItems = [
        {
            num: achievementsNum,
            text: achievementsText,
            buttonText: textButton
        },
        {
            num: achievementsNum,
            text: achievementsText,
            buttonText: textButton
        },
        {
            num: achievementsNum,
            text: achievementsText,
            buttonText: textButton
        },
        {
            num: achievementsNum,
            text: achievementsText,
            buttonText: textButton
        },
    ]

    useEffect(() => {
        console.log("Something happened");    
    });

    return(
        <section className="about">
            <div className="about__description">
                <p className="description__subtitle">
                    О нас
                </p>
                <h3 className="description__title">
                    Компания <span className="title__name">ИвановПром</span>
                </h3>
                <p className="description__text">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                </p>
            </div>
            <div className="about__achievements">
                {achievementsItems.map(item => (
                    <div className="achievements__block">
                        <h3
                            className="block__title"
                        >
                            {item.num}
                        </h3>
                        <p className="block__description">{item.text}</p>
                        <button
                            className="block__button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >
                            
                        </button>
                    </div>
                ))}
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            value={achievementsNum}
                            onChange={(e) => {changeNum(e)}}
                        />
                        <input
                            type="text"
                            value={achievementsText}
                            onChange={(e) => {changeText(e)}}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}