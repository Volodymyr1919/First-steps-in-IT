import React from "react";
import header from "./header.scss";
import logo from "../../assets/img/logo_copy_1.svg";
import Nav from "../Nav/Nav";

export default function Header() {
    return(
        <header className="header">
            <figure><img src={logo} alt="" /></figure>
                <Nav />
            <button>Связаться</button>
        </header>
    );
};