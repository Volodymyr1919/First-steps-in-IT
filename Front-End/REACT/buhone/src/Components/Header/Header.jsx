// eslint-disable-next-line no-unused-vars
import React    from "react";
import Nav      from "../Nav/Nav";
import logo     from "./Assets/logo.svg";
import burger   from "./Assets/burgerMenu.svg"
// eslint-disable-next-line no-unused-vars
import header   from "./header.scss";

export default function Header() {
    function toggleMenu() {
        document.querySelector('ul').classList.toggle('cancelTransform')
    }
    return(
        <header>
            <figure>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </figure>
            <Nav />
            <button className="header__button">Связаться</button>
            <img src={burger} alt="" className="burgerMenu" onClick={toggleMenu}/>
        </header>
    );
}