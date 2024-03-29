import React from "react";
import "../styles/Button.css"
export const Button = ({ label, fn, icon,mostrarBoton }) => {
  return (
    <>
        {mostrarBoton &&< button  className="btn-responsive" onClick={fn}>
          {label}
          {icon && <img className= "botonImg"src={icon}></img>}
        </button> }    
    </>
  );
};