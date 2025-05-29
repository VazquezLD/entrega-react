import React from "react";
import { Navbar } from "./Navbar";
import { Aside } from "./Aside";
import '../styles/Layout.css'

export const Layout = ({children}) => {
    return(
        <>
            <Navbar/>
            <Aside/>
            <main>
                {children}
            </main>
            
        </>
        
    )
}