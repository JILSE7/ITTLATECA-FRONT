import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';

const TablePrestamos = ({prestamo}) => {
    console.log(prestamo);
    const {idPrestamo, usuario,userAdmin, libro,fechaRetiro, fechaDevolucion, devolucion,observaciones, activo } = prestamo;
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
        <td colSpan="2"><button className="btn btn-warning"><MdModeEdit/></button><button className="btn btn-danger"><MdDelete/></button></td>
</tr>
    )
}

export default TablePrestamos
