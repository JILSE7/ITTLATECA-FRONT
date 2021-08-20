import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setActive } from '../../Actions/active';
import { openModalAction } from '../../Actions/ui';

const   TableLibros = ({libro}) => {
    //Desestructurando el objeto
    const {nombre, idLibro, imagen, autor, editorial, edicion, categoria, existencias, disponibles, ubicacion, prestamos} = libro;

    //Redux
    const dispatch = useDispatch();
    const handlerEdit = async() =>{
        dispatch(setActive(libro)); 
        
       /*  const resp = await Swal.fire({
            title: `¿Estás seguro de editar ${libro.nombre} ?`,
            icon: 'info', showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: 'Guardar',cancelButtonText: '!No, Espera¡'
        }); */
        
        dispatch(openModalAction());
    }

    const handlerActive = () =>{
    }  

    return (
        <tr className="table-row align-middle" onDoubleClick={handlerActive}>
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
