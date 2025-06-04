import '../../styles/Home.css'
import { HiPlus } from "react-icons/hi";
import { useState } from "react";


export const FaqCard = ({question, response}) => {

    const [open, setOpen] = useState(false);

    return(
        <div className="faqCard">
            <div className="faqHeader">
                <span className="faqTitle">{question}</span>
                <span className="iconFaq" onClick={() => setOpen(!open)}><HiPlus/></span>
            </div>
            <p className={`faqParag ${open ? 'open' : ''}`}>{response}</p>
        </div>
    )
}