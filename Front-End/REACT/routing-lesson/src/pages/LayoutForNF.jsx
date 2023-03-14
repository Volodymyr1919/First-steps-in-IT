import React from "react";
import { Outlet } from "react-router-dom";

const LayoutForNF = () => {
    return(
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default LayoutForNF;