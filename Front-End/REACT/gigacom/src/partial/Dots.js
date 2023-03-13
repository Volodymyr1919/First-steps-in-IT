import React from "react";
import { allRoutes } from "../routes/MainRoutes";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import dots from "./dots.scss";

export default function Dots() {
    return(
        <div className="rightDots">
            <ul>
                {allRoutes.map((page) => (
                    <li key={page.path}>
                        <NavLink exact='true' activeclassname='active' to={page.path}>
                            <span></span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}