import React from "react";
// eslint-disable-next-line no-unused-vars
import footer from "./footer.scss";

function Footer() {
    
    return(
        <footer id="footer">
                <p>Find Us On</p>
                <a href="https://github.com/" target="blank"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/" target="blank"><i className="bi bi-linkedin"></i></a>
                <a href="https://desktop.telegram.org/" target="blank"><i className="bi bi-telegram"></i></a>
                <a href="https://discord.com/" target="blank"><i className="bi bi-discord"></i></a>
        </footer>
    )
}

export default Footer;