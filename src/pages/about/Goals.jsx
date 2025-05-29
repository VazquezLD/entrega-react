import React from "react";
import './About.css'
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";


export const Goals = () => {
    return(
        <div className="goals">

            <div className="goal">
                <MdOutlineSentimentSatisfied className="goalIcon"/>
                <div className="descs">
                    <span className="goalTitle">+4000</span>
                    <span className="goaldesc">Compradores mensuales</span>
                </div>
            </div>

            <div className="goal">
                <BsHourglassSplit className="goalIcon"/>
                <div className="descs">
                    <span className="goalTitle">+40</span>
                    <span className="goaldesc">Años de experiencia</span>
                </div>
            </div>

            <div className="goal">
                <BiSolidOffer className="goalIcon"/>
                <div className="descs">
                    <span className="goalTitle">+20</span>
                    <span className="goaldesc">Convenios con tarjetas</span>
                </div>
            </div>

            <div className="goal">
                <BsBoxes className="goalIcon"/>
                <div className="descs">
                    <span className="goalTitle">+30.000</span>
                    <span className="goaldesc">Productos vendidos</span></div>        
            </div>

        </div>
    )
}