import React, { Component } from 'react';

class Lesson_snippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: "Long story"
        }
    }
    render() {
        const story =  this.state.story;
        return (
            <div>
                <p>{story}</p>
            </div>
        );
    }
}

export default Lesson_snippet;