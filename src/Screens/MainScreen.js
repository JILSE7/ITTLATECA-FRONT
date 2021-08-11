import React from 'react'
import { useHistory } from 'react-router-dom'

const MainScreen = () => {

    const {push} = useHistory();

    const buscarLibro = () => push('/search');
    const misPrestamos = () => push('/prestamos');
    const panelAdmin = () => push('/admin');

    return (
        <div className="container">
            <div className="saludo">
                <h1>Bienvenido Said</h1>
                <h2>Que haremos el dia de hoy?</h2>
            </div>

            <main className="menuBotones">
                <button onClick={buscarLibro} className="btn btn-success">Busquemos un libro</button>
                <button onClick={misPrestamos} className="btn btn-warning">Mis prestamos</button>
                <button onClick={panelAdmin} className="btn btn-info">Panel de administrador</button>
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
}

export default MainScreen
