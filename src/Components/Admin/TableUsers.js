import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';

const TableUsers = ({user}) => {
    console.log(user);
    const {uid, nombre, apellidos, email, telefono, numeroC, carrera, type, activo, prestamos} = user;
    return (
        <tr className="table-row align-middle">
        <th  scope="row" className="font-id">{uid}</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{email}</td>
        <td >{telefono}</td>
        <td>{numeroC}</td>
        <td>{carrera}</td>
        <td>{type}</td>
        <td>{activo}</td>
        <td>{prestamos.length}</td>
        <td colSpan="2"><button className="btn btn-warning"><MdModeEdit/></button><button className="btn btn-danger"><MdDelete/></button></td>
</tr>
    )
}

export default TableUsers
