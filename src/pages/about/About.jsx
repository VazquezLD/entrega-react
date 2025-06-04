import '../../styles/About.css'
import { Footer } from '../home/Footer'
import { AboutHero } from "./AboutHero";
import { AboutSections } from "./AboutSections";
import { Goals } from "./Goals";

export const About = () => {
    return(
        <div className="aboutContainer">
            <AboutHero/>
            <Goals/>
            <AboutSections/>
            <Footer/>
        </div>
    )
}