import React from "react";
import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Home from "../pages/home/Home"
import Services from "../pages/services/Services";
import Portfolio from "../pages/portfolio/Portfolio";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import TermPrivacy from "../pages/termPrivacy/TermPrivacy";
import NotFound from "../pages/notFound/NotFound";

const allRoutes = [
    {
      path: '/', 
      element: <Home />,
      title: "Home",
      icon: "bi bi-house-fill"
    },
    {
      path: '/services',
      element: <Services />,
      title: "Services",
      icon: "bi bi-info-circle-fill"
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
      title: "Portfolio",
      icon: "bi bi-folder-fill"
    },
    {
        path: '/about-us',
        element: <AboutUs />,
        title: "About Us",
        icon: "bi bi-people-fill"
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
        title: "Contact Us",
        icon: "bi bi-telephone-fill"
    },
    {
        path: '/terms-and-privacy',
        element: <TermPrivacy />,
        title: "Term & Privacy",
        icon: "bi bi-shield-fill-check"
    },
  ];
export {allRoutes};

function MainRoutes() {
    return(
        <SlideRoutes animation='vertical-slide' duration={1100}>
            {allRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
                ))}
            <Route path="*" element={<NotFound />}/>
        </SlideRoutes>
    )
}

export default MainRoutes;