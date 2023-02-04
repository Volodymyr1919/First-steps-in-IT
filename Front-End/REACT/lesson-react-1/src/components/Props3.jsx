import React from "react";
import Props4 from "./Props4";

const comment3 = {
    text: "enjoy"
};

function Comment3(props) {
    return(
        <p>{props.text}</p>
    );
};

export default class Props3 extends React.Component {
    render() {
        return(
            <span className="d-flex me-1">
                <Props4 /><Comment3 text={comment3.text}/>
            </span>
        )
    }
}