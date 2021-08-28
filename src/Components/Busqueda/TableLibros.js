import React from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi';
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { cleanActive, setActive } from '../../Actions/active';
import { startDeleteLibro, startToggleLibro } from '../../Actions/books';
import { closeModalAction, openModalAction } from '../../Actions/ui';
import { swalMenssage } from '../../Helpers/login';
import { validarPrestamos } from '../../Helpers/validarCampos';

const   TableLibros = ({libro}) => {
    //Desestructurando el objeto
    const {nombre, idLibro, imagen, autor, editorial, edicion, categoria, existencias, disponibles, ubicacion, prestamos, activo} = libro;
    console.log(activo);

    //Redux
    const dispatch = useDispatch();

    //Handlers
    const handlerEdit = async() =>{
        dispatch(setActive(libro)); 
        
        const {isConfirmed} = await Swal.fire({
            title: `¿Estás seguro de editar ${libro.nombre} ?`,
            icon: 'info', showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: 'Editar',cancelButtonText: '!No, Espera¡'
        });
        
       (isConfirmed) ?  dispatch(openModalAction()) : dispatch(cleanActive());
    };


    const handlerUnable = async() => {

        const {isConfirmed} = await Swal.fire({
            title: `¿Estás seguro de ${activo ? 'desactivar': 'activar'} ${libro.nombre} ?`,
            icon: `${activo ? 'error': 'info'}`, showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: `${activo ? 'Desactivar': 'Activar'}`,cancelButtonText: '!No, Espera¡'
        });

         if(!isConfirmed){
             return
         }else if(prestamos.length > 0){      
            if(validarPrestamos(prestamos)) return swalMenssage('El libro no puede ser eliminado porque tiene prestamos sin devolver');        
            dispatch(startToggleLibro(idLibro, activo)) ;
        }else{
            dispatch(startToggleLibro(idLibro, activo))  
            
        };
    };


    const handlerDelet = async() => {
        const {isConfirmed} = await Swal.fire({
            title: `¿Estás seguro de eliminar ${libro.nombre} ?`,
            icon: `error`, showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText: `Eliminar`,cancelButtonText: '!No, Espera¡'
        });

         if(isConfirmed) dispatch(startDeleteLibro(idLibro));

    }


    return (
        <tr className={ (activo)? "table-row  align-middle activo" : "table-row align-middle inactivo"} >
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
                    <td colSpan="1">
                    <div className="botones-accion">
                        {activo && <button className="btn btn-warning" onClick={handlerEdit}><MdModeEdit/></button>}
                        {!  activo ? (<button className="btn btn-success " title='ActivarLibro'  onClick={handlerUnable}><FiZap/></button>) :(<button className="btn btn-outline-success ms-2" title="desactivarLibro" onClick={handlerUnable}><FiZapOff/></button>) }
                        {! activo && <button className="btn btn-danger ms-2" title="eliminarLibro" onClick={handlerDelet} ><MdDelete/></button>}
                        </div>
                    </td>
        </tr>
    )
}

export default TableLibros
