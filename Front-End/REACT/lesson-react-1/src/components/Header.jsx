import React, { Component } from "react";
import '../styles/style.css';

class Header extends Component {
  state = {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    nameSite: "React App",
  };

  render() {
    return (
      <figure className="d-flex align-items-center m-0 bg-light logo">
        <img src={this.state.logo} alt="icon" width="33px" height="30px" />
        <a className="navbar-brand ms-1" href="#">
          {this.state.nameSite}
        </a>
      </figure>
    );
  }
}

export default Header;
