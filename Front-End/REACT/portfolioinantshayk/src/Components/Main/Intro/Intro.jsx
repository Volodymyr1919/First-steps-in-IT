import React from "react";
import man from "./assets/man.svg";
// eslint-disable-next-line no-unused-vars
import intro from "./intro.scss";

export default function Intro() {
    return(
        <section className="home">
            <div className="home__text">
                <h1 className="text__title">Inants <br /> Hayk</h1>
                <p className="text__description">web developer <br /> 28 years old, Yerevan</p>
                <p className="text__languages">RU <span className="languages_eng">| ENG</span></p>
            </div>
            <figure>
                <img src={man} alt="man" />
            </figure>
        </section>
    );
}