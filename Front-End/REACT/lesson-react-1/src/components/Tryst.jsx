import React from "react";


function setCol() {
    let ght = new Date;
    if(ght.getSeconds() % 2 === 0) {
        return "white";
    } else {
        return "red";
    }
}

const comment = {
    text: "I hope you enjoy learning React!",
    text1: "kewnvenbneaoboienb"
}

function Comment(props) {
    return(
        <p>{props.text}</p>
    );
}

export default class MyHeader extends React.Component { 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate"); // Обновление стейта от дочерних классов или любое обновление
        // Всегда с условием
      };
    retCol = () => {
        this.setState(
            {
            mystyle: {
                color: setCol(),
                backgroundColor: "DodgerBlue",
                padding: "10px",
                fontFamily: "Arial"
            }}
        )
    }
    state = {
        mystyle: {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
    }}
    render() {
      return (
        <div>
            <h1 style={this.state.mystyle} onClick={this.retCol}>Hello Style!</h1>
            <span style={this.state.mystyle}><Comment text={comment.text}/></span>
            <span style={this.state.mystyle}><Comment text={comment.text1}/></span>
            <p style={this.state.mystyle}>Add a little style!</p>
        </div>
      );
    }
   }

