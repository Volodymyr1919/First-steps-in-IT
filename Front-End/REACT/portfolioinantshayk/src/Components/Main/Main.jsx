import React from "react";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Skills/Skills";

export default function Main() {
    return(
        <main>
            <Intro />
            <About />
            <Skills />
        </main>
    );
}