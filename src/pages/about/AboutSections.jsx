import React from "react";
import '../../styles/About.css'
import { ThemeSection } from "./ThemeSection";


export const AboutSections = () => {
    return(
        <div className="aboutSections">
            
            <ThemeSection title={'Nuestra Historia'} paragraph={'En BestProducts, nacimos con una idea clara: ofrecer productos esenciales para el día a día de forma accesible, confiable y con una atención al cliente que marque la diferencia. Desde nuestros inicios, hemos crecido con una fuerte base de compromiso y pasión por mejorar la vida cotidiana de nuestros clientes a través de productos de calidad y un servicio cercano.Ya sea que busques artículos para el hogar, tecnología, belleza, herramientas o productos de uso diario, en General Plus encontrarás una amplia selección pensada para cubrir cada necesidad con eficiencia y confianza.'}/>

            <ThemeSection title={'Nuestra Misión'} paragraph={'Simplificar la vida de las personas, ofreciendo productos de calidad para el uso cotidiano con atención personalizada, compromiso social y mejora continua. Nos motiva brindar soluciones prácticas, sostenibles y accesibles, contribuyendo al bienestar de hogares, comercios y comunidades en todo el país.'}/>

            <ThemeSection title={'Nuestra Visión'} paragraph={'Ser una empresa líder en la distribución de productos generales, reconocida por su integridad, variedad, accesibilidad y conexión auténtica con las personas. Buscamos construir una comunidad fiel en torno a nuestra marca, donde cada cliente sepa que puede confiar en nosotros no solo por nuestros productos, sino por el valor humano detrás de cada entrega.'}/>

        </div>
    )
}