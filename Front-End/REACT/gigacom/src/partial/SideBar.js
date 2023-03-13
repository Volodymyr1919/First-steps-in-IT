import React, { Component } from 'react';
import { allRoutes } from '../routes/MainRoutes';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import sideBar from "./sideBar.scss";

class SideBar extends Component {
    render() {
        return (
            <nav className='quick-link'>
                <ul>
                    {allRoutes.map((page) => (
                        <li key={page.path} data-menuanchor={page.path}>
                            <NavLink exact='true' activeclassname='active' to={page.path}>
                                <i className={page.icon}></i>
                            </NavLink>
                            <span className='title'>{page.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default SideBar;