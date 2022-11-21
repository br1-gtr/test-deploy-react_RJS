import React from "react";
import "../css/Testimonio.css"
export function Testimonio(props){
    return(
        <div className="cont-test">
            <img className="img-test"
            src={require(`../img/img${props.img}.png`)}
            alt="Foto de Emma"
            />
            <div className="cont-text-test">
                <p className="nombre-test">
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-test">
                    {props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-test">"{props.test}"</p>   
            </div>
        </div>
    );
};
