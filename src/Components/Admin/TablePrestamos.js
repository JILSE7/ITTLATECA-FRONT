import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';
import {FaHandHolding} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { cleanActive, setActive } from '../../Actions/active';
import { openModalAction } from '../../Actions/ui';
import { startDeletePrestamo } from '../../Actions/prestamos';

const TablePrestamos = ({prestamo}) => {
    const {idPrestamo, usuario,userAdmin, libro,fechaRetiro, fechaDevolucion, devolucion,observaciones, activo } = prestamo;

        //Redux
        const dispatch = useDispatch();
        const handlerEdit = async() =>{
            dispatch(setActive(prestamo)); 
            
            const {isConfirmed} = await Swal.fire({
                title: `¿Estás seguro de editar El prestamo del usuario ${usuario.nombre} ${usuario.apellidos} ?`,
                icon: 'info', showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: 'Editar',cancelButtonText: '!No, Espera¡'
            });
            
           (isConfirmed) ?  dispatch(openModalAction()) : dispatch(cleanActive());
        }

        const handlerDelet = () => {
            const data = {idLibro: libro._id, idUsuario: usuario._id};
            
            dispatch(startDeletePrestamo(idPrestamo,data));
        }

    return (
        <tr className="table-row align-middle">
        <th  scope="row" className="font-id">{idPrestamo}</th>
        <td>{usuario.nombre} {usuario.apellidos}</td>
        <td>{userAdmin.nombre}</td>
        <td >{libro.nombre}</td>
        <td>{fechaRetiro}</td>
        <td>{fechaDevolucion}</td>
        <td>{(devolucion) ? "true"  :"false"}</td>
        <td>{observaciones}</td>
        <td>{(activo) ? "Activo" : "No Activo"}</td>
        <td colSpan="2">
            <div className="botones-accion">
            <button className="btn btn-info"><FaHandHolding/></button>
            <button className="btn btn-warning" onClick={handlerEdit}><MdModeEdit/></button>
            <button className="btn btn-outline-danger" onClick={handlerDelet}><MdDelete/></button>
            </div>
            </td>
</tr>
    )
}

export default TablePrestamos
