import React from "react";
import Props3 from "./Props3";

const comment4 = {
    text: "learning"
};

function Comment4(props) {
    return(
        <p>{props.text}</p>
    );
};

export default class Props2 extends React.Component {
    render() {
        return(
            <span className="d-flex me-1">
                <Props3 /><Comment4 text={comment4.text}/>
            </span>
        )
    }
}