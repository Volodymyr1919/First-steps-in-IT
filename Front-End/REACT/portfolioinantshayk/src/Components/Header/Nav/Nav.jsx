import React from "react";
// eslint-disable-next-line no-unused-vars
import nav from "./nav.scss";

export default function Nav() {
    const navigation = [
        {
            title: 'Home',
            link: '/home'
        },
        {
            title: 'About me',
            link: '/about'
        },
        {
            title: 'Skills',
            link: '/skills'
        },
        {
            title: 'Portfolio',
            link: '/portfolio'
        },
        {
            title: 'Contacts',
            link: '/contacts'
        }
    ]
    return(
        <nav>
            <ul>
                {navigation.map(item => <li key={item.title}><a href={item.link}>{item.title}</a></li>)}
            </ul>
        </nav>
    );
}