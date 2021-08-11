import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                
                <Link to="/login" className="navbar-brand" >
                <img className="imgHeader" src="https://universidadesdemexico.mx/logos/original/logo-instituto-tecnologico-de-tlalnepantla.png" alt="" /> 
                </Link>
                
                <h1>ITTLATECA</h1>
                <ul class="navbar-nav">
     
        <li class="nav-item dropdown">
          <p class="perfil dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Perfil
          </p>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/perfil">Mi perfil</Link></li>
            <li><Link class="dropdown-item" to="/search">Buscar Libros</Link></li>
            <li><Link class="dropdown-item" to="/">Salir</Link></li>
          </ul>
        </li>
      </ul>
        
    </nav>
            
        </div>
    )
}

export default Header




