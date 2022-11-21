import React from 'react';
import {Link} from "react-router-dom"
import {ContainerLinks, Logo, Tooltip} from "../styles/NavBarSyle"



const NavBar = () => {
  return (
    <Tooltip>
        <Logo>Recetario</Logo>
        <ContainerLinks>
           <Link to="/recetario">Home</Link>
           <Link to="crearReceta">Crear Receta</Link>
        </ContainerLinks>
    </Tooltip>
  )
}

export default NavBar