import React from "react";
import main from "./main.scss";
import dino from "../../assets/img/din_1.svg";
import bike from "../../assets/img/image_1.svg";


export default function Main() {
    return(
        <main className="tab-content" id="myTabContent">
            <section
                className="tab-pane fade show active"
                id="about-tab-pane"
                role="tabpanel"
                aria-labelledby="about-tab"
                tabIndex="0"
            >
                <div>
                    <div>
                        <h3>Веломастераская "Велозавр"</h3>
                        <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                    </div>
                    <figure>
                        <img src={dino} alt="" />
                    </figure>
                </div>
            </section>
            <section
                className="tab-pane fade"
                id="offers-tab-pane"
                role="tabpanel"
                aria-labelledby="offers-tab"
                tabIndex="0"
            >
                <div>
                    <div>
                        <h3>Что мы предлагаем</h3>
                        <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
                    </div>
                    <figure>
                        <img src={bike} alt="" />
                    </figure>
                </div>
                
            </section>
            <section
                className="tab-pane fade"
                id="rent-tab-pane"
                role="tabpanel"
                aria-labelledby="rent-tab"
                tabIndex="0"
            >
                <p></p>
            </section>
            <section
                className="tab-pane fade"
                id="news-tab-pane"
                role="tabpanel"
                aria-labelledby="news-tab"
                tabIndex="0"
            >
                
            </section>
            <section
                className="tab-pane fade"
                id="tradeIn-tab-pane"
                role="tabpanel"
                aria-labelledby="tradeIn-tab"
                tabIndex="0"
            >
                <figure></figure>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
            </section>
        </main>
    );
}