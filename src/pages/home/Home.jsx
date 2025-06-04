import '../../styles/Home.css'
import { Hero } from "./Hero";
import { SectionThemes } from "./SectionThemes";
import { OfertContainer } from "./Ofert";
import { FaqsContainer } from "./FaqsContainer";
import { Footer } from "./Footer";


export const Home = () => {
    return(
       <div className="homeContainer">
            <Hero/>
            <OfertContainer/>
            <SectionThemes/>
            <FaqsContainer/>
            <Footer/>
       </div>
    )
}