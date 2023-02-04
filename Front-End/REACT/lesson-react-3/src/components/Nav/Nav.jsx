import React from "react";
import nav from "./nav.scss";

export default function Nav() {
    let _menu = [
        {
            title: "О нас",
            link: "/about"
        },
        {
            title: "Услуги",
            link: "/offers"
        },
        {
            title: "Аренда",
            link: "/rent"
        },
        {
            title: "Новости",
            link: "/news"
        },
        {
            title: "Обмен",
            link: "/tradeIn"
        }
        ];
    return(
        <nav>
            <ul className="nav" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a href={_menu[0].link}
                        className="nav-link active"
                        id="about-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#about-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="about-tab-pane"
                        aria-selected="true"
                    >
                        {_menu[0].title}
                        {/* <div></div> */}
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href={_menu[1].link}
                        className="nav-link"
                        id="offers-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#offers-tab-pane"
                        aria-controls="offers-tab-pane"
                        aria-selected="false"
                    >
                        {_menu[1].title}
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href={_menu[2].link}
                        className="nav-link"
                        id="rent-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#rent-tab-pane"
                        aria-controls="rent-tab-pane"
                        aria-selected="false"
                    >
                        {_menu[2].title}
                    </a>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <a href={_menu[30].link}
                        className="nav-link"
                        id="news-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#news-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="news-tab-pane"
                        aria-selected="false"
                    >
                        {_menu[3].title}
                        <div></div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href={_menu[4].link}
                        className="nav-link"
                        id="tradeIn-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tradeIn-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="tradeIn-tab-pane"
                        aria-selected="false"
                    >
                        {_menu[4].title}
                        <div></div>
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}