import React, { useState } from "react";

export default function HoverDiv() {

    const randomColor = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    };

    const [color, setColor] = useState(randomColor);

    const changeColor = (e) => {
        e.preventDefault();
        setColor(randomColor);
    }

    const backColor = (e) => {
        e.preventDefault();
        setColor("transparent");
    }

    return(
       <div
            onMouseOver={changeColor}
            style={{width: "500px", height: "500px", background: color}}
            onMouseLeave={backColor}
       >

       </div> 
    );
};

function retBlue() {
    console.log("Enter")
    return "blue"
};

function retLightGreen() {
    console.log("Over")
    return "lightGreen"
}