import React from "react";
import Props5 from "./Props5";

const comment2 = {
    text: "you"
};

function Comment2(props) {
    return(
        <p>{props.text}</p>
    );
};

export default class Props4 extends React.Component {
    render() {
        return(
            <span className="d-flex me-1">
                <Props5 /><Comment2 text={comment2.text}/>
            </span>
        )
    }
}