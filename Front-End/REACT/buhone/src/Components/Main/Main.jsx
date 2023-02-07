import React, { useState } from "react";
import Offers from "../Offers/Offers";
import About from "../About/About";

export default function Main() {
    return(
        <main>
            <Offers />
            <About />
        </main>
    );
}