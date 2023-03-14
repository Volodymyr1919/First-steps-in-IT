import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import LayoutForNF from "./pages/LayoutForNF";
import NotFound from "./pages/notFound/NotFound";
import links from "./links";

export default function SiteRoutes() {
    return(
        <Routes>
            <Route element={<Layout />}>
                {links.map(item => <Route key={item.id} path={item.href} element={item.tag}/>)}
            </Route>
            <Route element={<LayoutForNF />}>
                <Route path='*' element={<NotFound />}/>
            </Route>
        </Routes>
    );
}