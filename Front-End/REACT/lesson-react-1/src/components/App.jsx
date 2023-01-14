import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import Mobile_menu from "./Mobile-menu";
import '../styles/style.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Header />
            <Navigation />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list burger_menu" viewBox="0 0 16 16" onClick={menu_toggle}>
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
        </nav>
      </header>
      <Content />
      <Footer />
      <Mobile_menu />
    </div>
  );
}

export default App;

function menu_toggle() {
  document.querySelector('.mobile_menu').classList.toggle('mobile_menu_open');
}