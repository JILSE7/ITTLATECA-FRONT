import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';
import {FaHandHolding} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { cleanActive, setActive } from '../../Actions/active';
import { openModalAction } from '../../Actions/ui';
import { startDeletePrestamo, startDevolucion } from '../../Actions/prestamos';
import { devolucionMessage, isConfirmed, swalMenssage } from '../../Helpers/login';

const TablePrestamos = ({prestamo}) => {
    const {idPrestamo, usuario,userAdmin, libro,fechaRetiro, fechaDevolucion, devolucion,observaciones, activo } = prestamo;
    const nombre = usuario.nombre+ usuario.apellidos;
        //Redux
        const dispatch = useDispatch();

        //Handlers
        const handlerEdit = async() =>{
            dispatch(setActive(prestamo)); 
            const resp =await  isConfirmed(nombre,'el prestamo',true, 'warning');

           (resp) ?  dispatch(openModalAction()) : dispatch(cleanActive());
        }

        const handlerDelet = async() => {
            const resp = await isConfirmed(nombre,'el prestamo',false, 'error');

            if(!resp)return;

            const data = {idLibro: libro._id, idUsuario: usuario._id};
            dispatch(startDeletePrestamo(idPrestamo,data));
        }

        const handlerDevolucion =async() => {
            console.log('realizando devolucion');

            const resp = await devolucionMessage(libro.nombre);
            if(resp){
                dispatch(startDevolucion(idPrestamo));
            }else{
                swalMenssage('Devolucion Cancelada')
            }

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
            <button className="btn btn-info" onClick={handlerDevolucion}><FaHandHolding/></button>
            <button className="btn btn-warning" onClick={handlerEdit}><MdModeEdit/></button>
            <button className="btn btn-outline-danger" onClick={handlerDelet}><MdDelete/></button>
            </div>
            </td>
</tr>
    )
}

export default TablePrestamos
