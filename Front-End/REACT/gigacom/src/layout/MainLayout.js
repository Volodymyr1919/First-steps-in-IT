import React from "react";
import Navigation from '../partial/Navigation';
import Footer from "../partial/Footer";
import SideBar from '../partial/SideBar';
import Dots from "../partial/Dots";
import VideoBg from "../partial/VideoBg";

const MainLayout = ({ children }) => {
    return (
      <>
        <Navigation />
        <SideBar />
        <main>{children}</main>
        <Footer />
        <Dots />
        <VideoBg />
      </>
    )
}
  
export default MainLayout;