import React from "react";
import Props2 from "./Props2";

const comment5 = {
    text: "React!"
};

function Comment5(props) {
    return(
        <p>{props.text}</p>
    );
};

export default class Props1 extends React.Component {
    render() {
        return(
            <span className="d-flex me-1">
                <Props2 /><Comment5 text={comment5.text}/>
            </span>
        )
    }
}
