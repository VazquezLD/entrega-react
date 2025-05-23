import React from "react";
import './Home.css'
import { CardTheme } from './CardTheme'
import image1 from '../../assets/themeImg.jpg'
import image2 from '../../assets/themeImg1.jpg'
import image3 from '../../assets/themeImg2.jpg'

export const SectionThemes = () => {
    return(
        <div className="sectionThemes">
            <CardTheme 
            title={'Productos innovadores que se adaptan a tus necesidades y estilo de vida.'}
            desc={'Nuestros productos combinan funcionalidad y estética para mejorar tu día a día.'}
            src={image1}
            alt={'image-theme'}
            />

            <CardTheme 
            title={'Compromiso con la sostenibilidad y el respeto al medio ambiente.'}
            desc={'Cada producto está diseñado pensando en el futuro del planeta.'}
            src={image2}
            alt={'image-theme'}
            />

            <CardTheme 
            title={'Productos innovadores que se adaptan a tus necesidades y estilo de vida.'}
            desc={'Todo tipo de productos para cualquier tipo de necesidad, al alcance de tu mano. Nuestros productos combinan funcionalidad y estética para mejorar tu día a día.'}
            src={image3}
            alt={'image-theme'}
            />

        </div>
    )
}