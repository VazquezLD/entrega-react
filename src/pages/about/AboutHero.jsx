import React from "react";
import '../../styles/About.css'
import { TeamMember } from './TeamMember'

export const AboutHero = () => {
    return(
        <div className="aboutHero">
            <header className="title">
                <h1 className="aboutHeroTitle">
                Sobre Nosotros y nuestro Equipo
            </h1>
            </header>
            <div className="heroTeam">
                <TeamMember memberName={'Carla Méndez - Directora General'} quote={'"Liderar no es solo tomar decisiones, es inspirar confianza en cada paso que damos."Carla fundó General Plus con la visión de construir algo útil y duradero. Su enfoque combina estrategia y empatía, guiando a todo el equipo con claridad y compromiso.'}/>
                <TeamMember memberName={'Tomás Ruiz - Jefe de Logística'} quote={'"Un buen producto no vale nada si no llega a tiempo, y en buen estado." Tomás coordina todo lo relacionado con distribución, almacenamiento y envíos. Su obsesión por los detalles asegura que cada entrega sea precisa y eficaz.'}/>
                <TeamMember memberName={'Julia Estrada - Responsable de Atención al Cliente'} quote={'"Escuchar es el primer paso para servir bien." Julia lidera el equipo que responde cada mensaje, atiende reclamos y convierte inconvenientes en soluciones. Su vocación es hacer que cada cliente se sienta valorado.'}/>
                <TeamMember memberName={'Marcos Dávila - Gerente de Producto'} quote={'"Elegir lo que vendemos es tan importante como cómo lo vendemos." Marcos investiga tendencias, selecciona nuevos productos y gestiona proveedores para mantener siempre una oferta actual, útil y diversa.'}/>
            </div>
        </div>
    )
}