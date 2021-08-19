import React from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'

const   TableLibros = ({libro}) => {
    const {nombre, idLibro, imagen, autor, editorial, edicion, categoria, existencias, disponibles, ubicacion, prestamos, activo} = libro;
    return (
        <tr className="table-row align-middle">
                    <th  scope="row" className="font-id">{idLibro}</th>
                    <td>{nombre}</td>
                    <td><img className="imagen-libro" src={imagen}/></td>
                    <td>{autor}</td>
                    <td>{editorial}</td>
                    <td >{edicion}</td>
                    <td>{categoria.join(',')}</td>
                    <td>{existencias}</td>
                    <td>{disponibles}</td>
                    <td>{ubicacion}</td>
                    <td>{prestamos.length}</td>
                    <td colSpan="2"><button className="btn btn-warning"><MdModeEdit/></button><button className="btn btn-danger mt-2"><MdDelete/></button></td>
        </tr>
    )
}

export default TableLibros
