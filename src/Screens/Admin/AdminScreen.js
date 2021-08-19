import React from 'react'
import { FaHandshake, FaUsersCog } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import useType from '../../Hooks/useType'

const AdminScreen = ({user}) => {
    //Veificacion de administrador
    useType(user.type);

    const history = useHistory();

    const goAdmin = (path)  => history.push(`/admin/${path}`)
    

    return (
        <div className="container">
                <h1>Administrador</h1>
                <h2> {user.nombre} {user.apellidos}</h2>
                <h3 className="mt-4">¿Que vamos a Gestionar?</h3>
            <div className="_admin-body">
                <div className="menuBotonesAdmin">
                <div className="icon">
                    <FaUsersCog className="icono-admin user" onClick={() => goAdmin('usuarios')}/>
                    <p>Usuarios</p>
                </div>
                <div  className="icon">
                    <ImBooks className="icono-admin books"  onClick={() => goAdmin('libros')}/>
                    <p>Libros</p>
                </div>
                <div   className="icon">
                    <FaHandshake className="icono-admin prestamo" onClick={() => goAdmin('prestamos')}/>
                    <p>Prestamos</p>
                </div>
                
                </div>
            </div>
                <p className="text-center">Todos los cambios realizados seran guardados en la base de datos, asegurese que lo que esta haciendo sea correcto</p>
        </div>
    )
}

export default AdminScreen
