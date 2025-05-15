import React from "react";
import { Navbar } from "./Navbar";
import "./Layout"

export const Layout = ({children}) => {
    return(
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            
        </>
        
    )
}