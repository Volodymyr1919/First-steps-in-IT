import React from "react";
import Navigation from "./partial/Navigation";
import Footer from "./partial/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <Navigation />
            <hr />
            <main><Outlet /></main>
            <Footer />
        </>
    );
};

export default Layout;