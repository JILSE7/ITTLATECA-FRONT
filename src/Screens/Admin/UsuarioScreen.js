import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetUsers } from '../../Actions/user';
import TableUsers from '../../Components/Admin/TableUsers';
import useType from '../../Hooks/useType';

const UsuarioScreen = ({user}) => {
    //Veificando administrador
    useType(user.type);

    const usuarios = useSelector(state => state.users);
    
    console.log(usuarios.users);

    const dispatch = useDispatch();
    useEffect(() => {
        if(!usuarios.total){
            dispatch(startGetUsers());
        }
    }, []);


    
  /*   useEffect(() => {
        if(!libros.total){
            dispatch(startGetBooks());
        }else{
            setlibros([...libros.libros])
        }
    }, [libros]); */

    
    return (
        <div className="container">
            <div className="_LibroScreen-body">
                Buscar
            <table class="table">
                <thead>
                    <tr className="text-center font-id">
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">NumeroC</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Type</th>
                    <th scope="col">Activo</th>
                    <th scope="col">Prestamos</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {  
                       usuarios.users.map(user => (<TableUsers user={user}/>))

                    } 
                    
                
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsuarioScreen
