import React, { useEffect, useState } from 'react'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPrestamos } from '../../Actions/prestamos';
import TablePrestamos from '../../Components/Admin/TablePrestamos';
import { busquedaPrestamos, prestamosNoDevueltos } from '../../Helpers/searchBooks';
import { useForm } from '../../Hooks/useForm';
import useType from '../../Hooks/useType';

const PrestamoScreen = ({user}) => {
    useType(user.type);
    const [{search}, handleInputChange] = useForm({search:''});

    const prestamos = useSelector(state => state.prestamos);

    //states
    const [devoluciones, setDevoluciones] = useState(false);
    const [prestamosState, setPrestamos] = useState([]);
    const [busquedaSearch, setbusquedaSearch] = useState([]);

    //function
    const toggleDevoluciones = () => setDevoluciones(!devoluciones);

    const dispatch = useDispatch();


    useEffect(() => {
        if(!prestamos.total){
            dispatch(startGetPrestamos());
        }else{
            setPrestamos([...prestamos.prestamos])
        }
    }, [prestamos, dispatch]);

    useEffect(() => {
        if(devoluciones){
            setPrestamos((prestamosState) => prestamosNoDevueltos(prestamosState))
        }else{
            setPrestamos([...prestamos.prestamos])
        }
    }, [devoluciones, prestamos.prestamos]);

    useEffect(() => {
        setbusquedaSearch(busquedaPrestamos(prestamosState, search))
    }, [search])

    console.log(busquedaSearch);
    return (    
        <div className="container">
            <div className="_LibroScreen-body">
            <div className="buscar"> 
                    <input placeholder="Buscar por ultimos 4 digitos del id" className="form-control" name="search" value={search} onChange={handleInputChange}/>
                    <p className="text-center mt-3">Filtrar por libros no devueltos { (!devoluciones) ? <BiCheckbox onClick={toggleDevoluciones}/> : <BiCheckboxChecked onClick={toggleDevoluciones}/> }</p> 
                </div>
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
                    
                    (busquedaSearch.length > 0) ? busquedaSearch.map( prestamo => <TablePrestamos prestamo={prestamo}/>) : prestamosState.map( prestamo => <TablePrestamos prestamo={prestamo}/>)
                    } 
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default PrestamoScreen
