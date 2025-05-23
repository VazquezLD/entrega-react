import React from "react";
import './Home.css'

export const ImageContainer = ( {src, alt} ) => {
    return(
        <div className="imageContainer">
            <img src={src} alt={alt} className="imageHero"/>
        </div>
    )
}