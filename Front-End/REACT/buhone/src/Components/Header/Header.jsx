// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import logo from "./Assets/logo.svg";
// eslint-disable-next-line no-unused-vars
import header from "./header.scss";

export default function Header() {
    return(
        <header>
            <figure>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </figure>
            <Nav />
            <button className="header__button">Связаться</button>
        </header>
    );
}