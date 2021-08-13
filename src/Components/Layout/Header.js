import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../../Actions/auth';
import {FaUserCircle} from 'react-icons/fa'

//Logos
import tecnm from '../../Assets/tecnm.png';

const Header = () => {
    //Redux
    const dispatch = useDispatch();
    const {login} = useSelector(state => state.auth)
    //Router
    const history = useHistory();
    
    const handlerLogout = () =>{
      dispatch(logOut());
      history.replace('/login');
      localStorage.clear();
    }
    
    return (
        <div className="header">
            <nav className="navbar">
                
                <Link to="/login" className="navbar-brand" >
                <img className="imgHeader" src="https://universidadesdemexico.mx/logos/original/logo-instituto-tecnologico-de-tlalnepantla.png" alt="" /> 
                </Link>
                
                <h1>ITTLATECA</h1>
               { (login) ?  (<ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div className="perfil dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaUserCircle className="" style={{fontSize: '44px'}}/>
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link className="dropdown-item" to="/perfil">Mi perfil</Link></li>
                      <li><Link className="dropdown-item" to="/search">Buscar Libros</Link></li>
                      <li><p onClick={handlerLogout} className="dropdown-item cursor">Salir</p></li>
                    </ul>
                  </li>
                </ul>) : <img className="imgHeader tecnm" src="https://pbs.twimg.com/profile_images/468146735047389184/HUX8h7U8_400x400.jpeg" alt="" />  }
        
            </nav>
            
        </div>
    )
}

export default Header




