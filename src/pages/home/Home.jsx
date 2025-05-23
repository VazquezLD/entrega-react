import React from "react";
import './Home.css'
import { Hero } from "./Hero";
import { SectionThemes } from "./SectionThemes";
import { OfertContainer } from "./Ofert";


export const Home = () => {
    return(
       <div className="homeContainer">
            <Hero/>
            <OfertContainer/>
            <SectionThemes/>
       </div>
    )
}