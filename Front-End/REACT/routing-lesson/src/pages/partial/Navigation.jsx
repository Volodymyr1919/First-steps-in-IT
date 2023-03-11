import React from "react";
import { NavLink } from "react-router-dom";
import links from "../../links";

export default function Navigation() {
    return(
        <header>
            <ul>
                {links.map(item => <li key={item.id}><NavLink activeclassname="active" to={item.href}>{item.title}</NavLink></li>)}
            </ul>
        </header>
    );
}