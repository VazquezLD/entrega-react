import React from "react";
import './Home.css'
import { Hero } from "./Hero";
import { SectionThemes } from "./SectionThemes";


export const Home = () => {
    return(
       <div className="homeContainer">
            <Hero/>
            <SectionThemes/>
       </div>
    )
}