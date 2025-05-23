import React from "react";
import './Home.css'
import { TextParagraph } from "./TextParagraph";
import { ImageContainer } from "./ImageContainer"
import imagen from '../../assets/heroImg2.jpg'

export const Hero = () => {
    return(
        <div className="heroContainer">
            <TextParagraph/>
            <ImageContainer src={imagen} alt={'hero-image'}/>
        </div>
    )
}