import React, { useState, useEffect } from "react";

export default function _useEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count}`
    });
    function add(){
        setCount(count + 1);
    };
    return(
        <div>
            <button
                onClick={add}
            >Click</button>
        </div>
    );
}