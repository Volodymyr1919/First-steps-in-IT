import React from "react";
// eslint-disable-next-line no-unused-vars
import about from "./about.scss";

export default function About() {
    return(
        <section className="about">
            <h3 className="about__title">About me</h3>
            <p className="about_description">
                Hi, I'm Hayk – web developer from Yerevan. <br /> I'm interested in development and everything connected with it.
            </p>
            <p className="about_description">
                Ready to implement excellent projects <br /> with wonderful people.
            </p>
        </section>
    );
}