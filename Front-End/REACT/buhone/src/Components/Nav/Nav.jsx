import React, { useState } from "react";
import nav from "./nav.scss";

export default function Nav() {
    const navigationItems = [
        {
            name: 'Главная',
            url: '/main'
        },
        {
            name: 'Услуги',
            url: '/offers'
        },
        {
            name: 'Кейсы',
            url: '/cases'
        },
        {
            name: 'О компании',
            url: '/about'
        },
        {
            name: 'Контакты',
            url: '/contacts'
        },
    ]
    return(
        <nav>
            <ul>
                {navigationItems.map(item => (<li><a href={item.url}>{item.name}</a></li>))}
            </ul>
        </nav>
    );
}