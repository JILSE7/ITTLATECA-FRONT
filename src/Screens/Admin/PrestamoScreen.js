import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetPrestamos } from '../../Actions/prestamos';
import TablePrestamos from '../../Components/Admin/TablePrestamos';
import useType from '../../Hooks/useType';

const PrestamoScreen = ({user}) => {
    useType(user.type);

    const prestamos = useSelector(state => state.prestamos);
    
    console.log(prestamos);

    const dispatch = useDispatch();
    useEffect(() => {
        if(!prestamos.total){
            dispatch(startGetPrestamos());
        }
    }, []);


/*     usuario
userAdmin
libro
fechaRetiro
fechaDevolucion
devolucion
observaciones
activo */
    return (
        <div className="container">
            <div className="_LibroScreen-body">
            Buscar
            <table class="table">
                <thead>
                    <tr className="text-center font-id">
                    <th scope="col">Id</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Libro</th>
                    <th scope="col">Fecha de retiro</th>
                    <th scope="col">Fecha de devolucion</th>
                    <th scope="col">Devolucion</th>
                    <th scope="col">Observaciones</th>
                    <th scope="col">Activo</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {  
                       prestamos.prestamos.map(prestamo => (<TablePrestamos prestamo={prestamo}/>))

                    } 
                    
                
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default PrestamoScreen
