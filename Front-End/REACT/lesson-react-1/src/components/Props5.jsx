import React from "react";

const comment = {
    text: "I hope"
};

function Comment(props) {
    return(
        <p>{props.text}</p>
    );
};

export default class Props5 extends React.Component {
    render() {
        return(
            <span className="d-flex me-1"><Comment text={comment.text}/></span>
        )
    }
}