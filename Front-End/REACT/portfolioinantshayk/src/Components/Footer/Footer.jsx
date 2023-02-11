import React from "react";
// eslint-disable-next-line no-unused-vars
import footer from "./footer.scss";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import behance from "./assets/behance.svg";
import dribbble from "./assets/dribbble.svg";

export default function Footer() {
    return(
        <footer>
            <h3 className="footer__title">Contacts</h3>
            <p className="footer__description">
                Want to know more or just chat? <br /> You are welcome!
            </p>
            <button className="footer_button">Send message</button>
            <div className="footer__pictures">
                <figure className="picture__social"><img src={linkedin} alt="" /></figure>
                <figure className="picture__social"><img src={instagram} alt="" /></figure>
                <figure className="picture__social"><img src={behance} alt="" /></figure>
                <figure className="picture__social"><img src={dribbble} alt="" /></figure>
            </div>
            <p className="footer__social">
                Like me on <br /> LinkedIn, Instagram, Behance, Dribble
            </p>
        </footer>
    );
}