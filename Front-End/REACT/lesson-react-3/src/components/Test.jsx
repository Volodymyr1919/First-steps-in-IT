import React, { useState, useEffect } from "react";

export default function Test() {
    const [count, setCount] = useState(0);
    function add(){
        setCount(count * 1 + 1);
        localStorage.setItem("NumberOfClicks", count * 1 + 1);
        console.log(`You clicked ${count * 1 + 1}`);
    };
    useEffect(() => {
        function setDefaultNum(){
            setCount(localStorage.getItem("NumberOfClicks"));
        };
        setDefaultNum();
    }, []);
    return(
        <div>
            <p>Number of clicks {count}</p>
            <button onClick={() => add()}>Click Me!</button>
        </div>
    );
};