import React from "react";
// eslint-disable-next-line no-unused-vars
import notFound from "./notFound.scss";

export default function NotFound() {
    return(
        <div className="sorry">
            <section className="notFound">
                <div className="img">
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                    <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
                </div>
                <div className="text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO HOME?</h3>
                    <a href="/" className="yes">YES</a>
                </div>
            </section>
        </div>
    );
}