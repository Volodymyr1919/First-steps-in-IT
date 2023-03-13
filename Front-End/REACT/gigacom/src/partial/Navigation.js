import React, { Component } from 'react';
import logo from '../assets/img/logo_large.png';
import { allRoutes } from '../routes/MainRoutes';
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import navigation from "./navigation.scss";

class Navigation extends Component {
    render() {
        return (
            <header className="header-top">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div className='menu'>
                    <ul>
                        {allRoutes.map((page) => (
                            <li key={page.path}>
                                <NavLink exact='true' activeclassname='active' to={page.path}>
                                    {page.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navigation;