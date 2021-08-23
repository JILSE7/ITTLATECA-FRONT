import React, { useEffect, useState } from 'react'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';
import { FaSearchengin } from 'react-icons/fa';
import { RiBook2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPrestamos } from '../../Actions/prestamos';
import { openModalAction } from '../../Actions/ui';
import TablePrestamos from '../../Components/Admin/TablePrestamos';
import ModalPrestamo from '../../Components/Modal/ModalPrestamo';
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
        if(!prestamos.ok && prestamos.total === null){
           dispatch(startGetPrestamos());
        }else{
            setPrestamos( [...prestamos.prestamos])
        }
    }, [ prestamos,dispatch]);

    useEffect(() => {
        if(devoluciones){
            setPrestamos((prestamosState) => prestamosNoDevueltos(prestamosState))
        }else{
           setPrestamos([...prestamos.prestamos]);
        }
    }, [devoluciones, prestamos]);

    useEffect(() => {
        console.log('useEffect Busqueda');
        setbusquedaSearch(busquedaPrestamos(prestamosState, search))
    }, [search]);

    const handlerClick = () =>{
        
        dispatch(openModalAction());
    }

    
    return (    
        <div className="container">
            <div className="_LibroScreen-body">
            <div className="d-flex w-100">
                    <div className="buscar"> 
                        <h3 className="text-center"><FaSearchengin/> Buscar</h3>
                        <input placeholder="Buscar por ultimos 4 digitos del id" className="form-control" name="search" value={search} onChange={handleInputChange}/>
                        <p className="text-center mt-3">Filtrar por libros no devueltos { (!devoluciones) ? <BiCheckbox onClick={toggleDevoluciones}/> : <BiCheckboxChecked onClick={toggleDevoluciones}/> }</p> 
                    </div>
                    <div className="añadir">
                        <h3>Crear nuevo prestamo</h3>
                        <button className="btn btn-outline-success mb-5" onClick={handlerClick}>+ <RiBook2Line/></button>
                    </div>
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
                <ModalPrestamo/>
            </div>
        </div>
    )
}

export default PrestamoScreen
