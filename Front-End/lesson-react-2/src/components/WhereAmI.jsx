import React from "react";

export default function WhereAmI() {
    const submit = (e) => {
        e.preventDefault();
        console.log("Position X: ", e.clientX, " Position Y: ", e.clientY);
    }
    return(
        <button 
            onClick={submit}
        >
            WhereAmI
        </button>
    );
}