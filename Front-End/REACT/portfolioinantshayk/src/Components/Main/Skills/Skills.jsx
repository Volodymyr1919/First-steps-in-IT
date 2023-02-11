import React from "react";
// eslint-disable-next-line no-unused-vars
import skills from "./skills.scss";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import react from "./assets/react.svg";

export default function Skills() {
    return(
        <section className="skills">
            <h3 className="skills__title">Skills</h3>
            <p className="skills__description">I work in such technologies as</p>
            <div className="skills__pictures">
                <figure><img src={html} alt="" /></figure>
                <figure><img src={css} alt="" /></figure>
                <figure><img src={javascript} alt="" /></figure>
                <figure><img src={react} alt="" /></figure>
            </div>
        </section>
    );
}