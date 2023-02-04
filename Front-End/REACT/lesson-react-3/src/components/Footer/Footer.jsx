import React from "react";
import footer from "./footer.scss"

export default function Footer() {
    let year = new Date().getFullYear();
    return(
        <footer>
            <p>© All rights reserved {year}</p>
        </footer>
    );
}