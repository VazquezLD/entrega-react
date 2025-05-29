import React from "react";
import '../../styles/Home.css'

export const CardTheme = ({title, desc, src, alt}) => {
    return(
        <div className="cardTheme">
            <img src={src} alt={alt} className="cardImg" />
            <p className="cardTitle">{title}</p>
            <p className="cardDesc">{desc}</p>
        </div>
    )
}