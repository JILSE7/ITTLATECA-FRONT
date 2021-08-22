import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { cleanActive, setActive } from '../../Actions/active';
import { closeModalAction, openModalAction } from '../../Actions/ui';

const   TableLibros = ({libro}) => {
    //Desestructurando el objeto
    const {nombre, idLibro, imagen, autor, editorial, edicion, categoria, existencias, disponibles, ubicacion, prestamos} = libro;

    //Redux
    const dispatch = useDispatch();
    const handlerEdit = async() =>{
        dispatch(setActive(libro)); 
        
        const {isConfirmed} = await Swal.fire({
            title: `¿Estás seguro de editar ${libro.nombre} ?`,
            icon: 'info', showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: 'Editar',cancelButtonText: '!No, Espera¡'
        });
        
       (isConfirmed) ?  dispatch(openModalAction()) : dispatch(cleanActive());
    }


    return (
        <tr className="table-row align-middle" >
                    <th  scope="row" className="font-id">{idLibro}</th>
                    <td>{nombre}</td>
                    <td><img className="imagen-libro" src={imagen} alt={nombre}/></td>
                    <td>{autor}</td>
                    <td>{editorial}</td>
                    <td >{edicion}</td>
                    <td>{categoria.join(',')}</td>
                    <td>{existencias}</td>
                    <td>{disponibles}</td>
                    <td>{ubicacion}</td>
                    <td>{prestamos.length}</td>
                    <td colSpan="2"><button className="btn btn-warning" onClick={handlerEdit}><MdModeEdit/></button><button className="btn btn-danger mt-2"><MdDelete/></button></td>
        </tr>
    )
}

export default TableLibros
