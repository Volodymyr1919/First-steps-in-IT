import React from "react";
import { Route, Routes } from 'react-router-dom';
import links from "./links";

export default function SiteRoutes() {
    return(
        <Routes>
            {links.map(item => <Route key={item.id} path={item.href} element={item.tag}/>)}
        </Routes>
    );
}