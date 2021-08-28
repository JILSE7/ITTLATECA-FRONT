import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../../Actions/auth';
import {FaUserCircle} from 'react-icons/fa'

//Logos
import logo from '../../Assets/ITTLA.png';
import logo2 from '../../Assets/tecnm.png';
//import tecnm from '../../Assets/tecnm.png';
import { destroyBooks } from '../../Actions/books';

const Header = () => {
    //Redux
    const dispatch = useDispatch();
    const {login} = useSelector(state => state.auth)
    //Router
    const history = useHistory();
    
    const handlerLogout = () =>{
      dispatch(logOut());
      dispatch(destroyBooks());
      history.replace('/login');
      localStorage.clear();
    }
    
    return (
        <div className="header">
            <nav className="navbar">
                <div className="navbarLeft">
                <Link to="/" className="navbar-brand divImage" >
                <img className="imgHeader" src={logo} alt="" /> 
                </Link>
                
                <h1>ITTLATECA</h1>

                </div>
                <div>
                      {  (login) ?  (<ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <div className="perfil dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaUserCircle className="icon" />
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><Link className="dropdown-item" to="/perfil">Mi perfil</Link></li>
                              <li><Link className="dropdown-item" to="/search">Buscar Libros</Link></li>
                              <li><p onClick={handlerLogout} className="dropdown-item cursor">Salir</p></li>
                            </ul>
                          </li>
                        </ul>) : <img className="tecnm" src={logo2} alt="" />  }
                  
                </div>
        
            </nav>
            
        </div>
    )
  }
  
  export default Header
  



