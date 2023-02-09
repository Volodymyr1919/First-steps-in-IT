import React    from "react";
import Offers   from "../Offers/Offers";
import About    from "../About/About";
// eslint-disable-next-line no-unused-vars
import main     from "./main.scss";

export default function Main() {
    return(
        <main>
            <Offers />
            <About />
        </main>
    );
}