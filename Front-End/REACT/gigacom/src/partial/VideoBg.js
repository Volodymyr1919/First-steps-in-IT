import React from "react";
import videoBg from "../assets/video/pexels-free-creative-stuff-5649206.mp4";

export default function VideoBg() {
    return(
        <video autoPlay muted loop id="myVideo">
            <source src={videoBg} type="video/mp4" />
        </video>
    );
}