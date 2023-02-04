import React, { Component } from "react";
// import Post from "./Post";
// import {Profile} from "./Profile";
import LoginForm from "./LoginForm";
import AgeCalc from "./AgeCalc";
import HoverDiv from "./HoverDiv";
import FormHooks from "./FormHooks";
import WhereAmI from "./WhereAmI";
import Weather from "./Weather";
import ExampleCtx from "./ContextTest";
import Toaster from "./Toaster";
import InputEmail from "./InputEmail";
import "./styles/style.css";
// function TodoText() {
//   return(<span>ÖOUB§ebaertaetnanartnrtntaerana45ana4nar</span>)
// }

const EmailContext = React.createContext({
  message: "Incorrect E-Mail"
})

class App extends Component {
  state = {
    message: "Incorrect E-Mail"
  }
  render() {
    
    return (
      <div className="App">
        {/* <HoverDiv /> */}
        {/* <FormHooks />
        <WhereAmI /> */}
        {/* <Post />
        <TodoText />
        <Profile /> */}
        {/* <LoginForm /> */}
         
    {/* <main className="container">
      <div className="menu">
        <div className="avatar">
          <img
            className="thumb"
            src="https://avatars.githubusercontent.com/u/30212452"
            width="60"
          />
          <span className="name">@georgechond</span>
        </div>
        <nav className="primary">
          <a href="#" className="menu-item active">
            <span className="iconoir-report-columns"></span>
            <span className="desc">Age bar</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-google-docs"></span>
            <span className="desc">Reports</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-table"></span>
            <span className="desc">Stats</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-bag"></span>
            <span className="desc">Cart</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-user"></span>
            <span className="desc">Clients</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-leaderboard"></span>
            <span className="desc">Analytics</span>
          </a>
          <a href="#" className="menu-item">
            <span className="iconoir-settings"></span>
            <span className="desc">Settings</span>
          </a>
        </nav>
        <span className="expander iconoir-arrow-right"></span>
      </div>
      <div className="topbar">
        <h1 className="current">Age bar</h1>
        <span className="search">
          <label><span className="iconoir-search"></span></label>
          <input className="bar" type="text" placeholder="Search..." />
        </span>
        <nav>
          <a href="#" className="menu-item">Orders</a>
          <a href="#" className="menu-item">Clients</a>
          <a href="#" className="menu-item">Sections</a>
          <a href="#" className="menu-item">Products</a>
        </nav>
      </div>
      <div className="dashboard">
        <div className="cardcolumn">
        <AgeCalc />
          <div className="card">
            <header>
              <a className="title" href="#"></a>
            </header>
            <div className="content"></div>
          </div>
          
        </div>
        <div className="cardcolumn">
          
          
        </div>
        <div className="cardcolumn">
          
          
        </div>
      </div>
      <div className="side">
        <Weather />
        <div className="card">
          <header>Schedule</header>
          <div className="content">
            <ul>
              <li onMouseEnter={sayHello}>(15:30) Deliver the project to client</li>
              <li>(18:00) Meet Mike @ White Goose</li>
              <li>(19:30) Dinner with Mary @ Kit-Bar</li>
              <li>(22:00) Watch the Falcons match</li>
              <li onMouseLeave={sayLeave}>(23:30) Headspace Meditate</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <div className="video">
      <video
        src="https://user-images.githubusercontent.com/30212452/203724691-9e93bf50-df02-4034-9743-dfe32d18bf58.mp4"
        muted
        playsInline
        autoPlay
        loop
      ></video>
    </div> */}
    <EmailContext.Provider value={this.state.message}>
      <InputEmail />
      <Toaster />
    </EmailContext.Provider>
      {/* <ExampleCtx /> */}
      </div>
    );
  }
}

export default App;

const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");

document.addEventListener("touchstart", () => {}, true);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    current.innerText = item.querySelector(".desc").textContent;
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
function sayLeave(){
  console.log("sayLeave");
}

function sayHello() {
  console.log("sayEnter");
}

const dummyData = () => {
  mainCards.forEach((card, i) => {
    card.querySelector(".title").innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    card.querySelector(
      ".content"
    ).innerText = "Aliquam vitae laoreet purus. Vivamus tincidunt nibh rhoncus, varius libero dignissim, molestie odio. Aenean sit amet felis et lectus viverra elementum. In quis tortor dignissim, ultrices odio et, dignissim quam. Donec scelerisque lacinia dolor, a pulvinar enim auctor quis. Sed mollis faucibus lacus id sagittis. Nunc et fringilla ipsum, et dignissim erat. Vivamus leo lorem, iaculis tempor quam nec, malesuada ullamcorper ipsum...".slice(
      0,
      Math.round(Math.random() * -200)
    );
  });
};


dummyData();