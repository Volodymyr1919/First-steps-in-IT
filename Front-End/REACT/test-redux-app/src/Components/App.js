import React, { Component } from 'react';
import Dashboard from './dashboard';
// eslint-disable-next-line no-unused-vars
import appStyle from "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;