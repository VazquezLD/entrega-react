import React from "react";
import './Contact.css'
import { Footer } from '../home/Footer'
import { ContactFormContainer } from "./ContactContainer";

export const Contact = () => {
    return(
        <div className="contactContainer">
            <ContactFormContainer/>
            <Footer/>
        </div>
    )
}