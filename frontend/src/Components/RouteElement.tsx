import React from "react";
import {Outlet} from "react-router-dom";

export const RootElement: React.ReactElement = () => {
    return (
        <>
            <Outlet/>
        </>
    );
}