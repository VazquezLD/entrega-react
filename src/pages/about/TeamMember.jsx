import React from "react";
import '../../styles/About.css'

export const TeamMember = ({memberName, quote}) => {
    return(
        <>
            <div className="teamMember">
                <h3 className="memberName">{memberName}</h3>
                <p className="memberQuote">{quote}</p>
            </div>
        </>
    )
}