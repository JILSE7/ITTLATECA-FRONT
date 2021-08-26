import React from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi';
import {FaUserCheck, FaUserAltSlash} from 'react-icons/fa'
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { cleanActive, setActive } from '../../Actions/active';
import { openModalAction } from '../../Actions/ui';
import { isConexion, isConfirmed, swalMenssage } from '../../Helpers/login';
import { startDeleteUser, startToogleConexion } from '../../Actions/user';
import { validarPrestamos } from '../../Helpers/validarCampos';

const TableUsers = ({user}) => {
    const {uid, nombre, apellidos, email, telefono, numeroC, carrera, type, activo, prestamos} = user;

    const dispatch = useDispatch();
    //Handlers
    const handlerEdit = async() =>{
        dispatch(setActive(user)); 
        const resp =await  isConfirmed(nombre,'al Usuario',true, 'warning');

        (resp) ?  dispatch(openModalAction()) : dispatch(cleanActive());
    }

    const handlerUnable = async() => {
        console.log(prestamos);
        const resp = await isConexion(nombre,activo, 'info');

         if(!resp){
             return
         }else if(prestamos.length > 0){      
            if(validarPrestamos(prestamos)) return swalMenssage('El usuario no puede ser desactivado porque tiene prestamos pendientes por devolver');        
            dispatch(startToogleConexion(uid, activo)) ;
        }else{
            dispatch(startToogleConexion(uid, activo))  
        };
    
 };

    const handlerDelet = async() => {
        const resp = await  isConfirmed(nombre,'al Usuario',false, 'warning');
        if(!resp){
            return
        }else if(prestamos.length > 0){      
           if(validarPrestamos(prestamos)) return swalMenssage('El usuario no puede ser Eliminado porque tiene prestamos pendientes por devolver');        
           dispatch(startDeleteUser(uid, nombre)); 
       }else{
           console.log('pasa directamente');
           dispatch(startDeleteUser(uid, nombre));
       };
    }


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
        <td>{(activo) ? <FaUserCheck style={{color: 'green'}}/> : <FaUserAltSlash style={{color: 'red'}}/> }</td>
        <td>{prestamos.length}</td>
        <td colSpan="2">
        <div className="botones-accion">
            
            <button className="btn btn-warning" title='editar' onClick={handlerEdit}><MdModeEdit/></button>
            {!  activo ? (<button className="btn btn-success" title='desactivarUsuario' onClick={handlerUnable}><FiZap/></button>) :(<button className="btn btn-outline-success" title='activarUsuario' onClick={handlerUnable}><FiZapOff/></button>) }
            <button className="btn btn-outline-danger" title="eliminarUsuario" onClick={handlerDelet}><MdDelete/></button>
            </div>
        </td>
</tr>
    )
}

export default TableUsers
