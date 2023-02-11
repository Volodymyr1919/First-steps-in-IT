import React from "react";
import Nav from "./Nav/Nav";
// eslint-disable-next-line no-unused-vars
import header from "./header.scss";
import burgerButton from "../Assets/burgerButton.svg"

export default function Header() {

    function showMenu() {
        document.querySelector('nav').classList.toggle('showMenu');
    }

    return(
        <header>
            <Nav />
            <figure className="header__figure" onClick={showMenu}><img src={burgerButton} alt="" /></figure>
        </header>
    );
}