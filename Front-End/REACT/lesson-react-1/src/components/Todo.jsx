// Создать компонент Todo.
// Внутри него создать переменные taskTitle, taskDescripttion, doneFlg со значениями заголовка дела, описания и булевого значения сделано дело или нет.
// Отобразить taskTitle и taskDescripttion и если doneFlg равно true, то заголовок и текст должны стать серого цвета и быть зачеркнутыми.
import React, { Component } from "react";
import { useState } from "react";
import '../styles/style.css';

let taskTitle = "Learn React";
let taskDescripttion = "Present on lessons with React and homework completing";
let doneFlg = false;
let donestyle;

if(doneFlg) {
    donestyle = {
        color: "gray",
        backgroundColor: "lightgreen",
        padding: "10px",
        fontFamily: "Arial",
        textDecoration: "line-through"
    }
} else {
    donestyle = {
        color: "white",
        backgroundColor: "blue",
        padding: "10px",
        fontFamily: "Arial",
        textDecoration: "none"
    }
}

export default function Todo() {
    const handleChange = () => {
        setChecked(!checked);
        if(checked) {
            document.querySelector("h3.NotDone").classList.remove("Done");
            document.querySelector("p.NotDone").classList.remove("Done");
        } else {
            document.querySelector("h3.NotDone").classList.add("Done");
            document.querySelector("p.NotDone").classList.add("Done");
        }
    };
    const [checked, setChecked] = useState(false);

    return(
        <section>
            <div className="d-flex ms-3">
                <input type="checkbox" name="" id="" checked={checked} onChange={handleChange}/>
                <div className="d-flex flex-column ms-2">
                    <h3 className="NotDone">{taskTitle}</h3>
                    <p className="NotDone">{taskDescripttion}</p>
                </div>
                
            </div>
        </section>
    )
}