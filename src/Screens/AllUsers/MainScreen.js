import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

//Icons
import {GiBookCover, GiOpenFolder} from'react-icons/gi'
import {GoTools} from 'react-icons/go';

const MainScreen = memo(() => {
    const {user} = useSelector(state => state.auth)
    
    //Navegacion
    const {push} = useHistory();
    const buscarLibro = () => push('/busquedas');
    const misPrestamos = () => push('/prestamos');
    const panelAdmin = () => push('/admin');

    const IconSize = useMemo(() => ({fontSize: '25px', marginLeft:"3px" }), []);
    const fondoIcons = (color)=> (window.outerWidth<=600) ? `btn btn-outline-${color}` : `btn btn-${color}`;

    return (
        <div className="container">
            <div className="saludo">
                <h1>Bienvenido</h1>
                <h2>{user.nombre} {user.apellidos} </h2>
                <h2>Que haremos el dia de hoy?</h2>
            </div>

            <main className="menuBotones">
                <button onClick={buscarLibro} className={fondoIcons("success")}>Buscar <GiBookCover style={IconSize}/></button>
                <button onClick={misPrestamos} className={fondoIcons("warning")}>Mis prestamos <GiOpenFolder style={IconSize}/></button>
               {user.type === 'ADMINISTRADOR' && <button onClick={panelAdmin} className={fondoIcons("info")}>Administradores  <GoTools style={IconSize}/></button>}
            </main>

            <div className="avisos">
                <span>Seccion de avisos</span>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
            </div>
        </div>
    )
})

export default MainScreen
