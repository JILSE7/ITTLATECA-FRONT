import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetUsers } from '../../Actions/user';
import TableUsers from '../../Components/Admin/TableUsers';
import { busquedUsuario } from '../../Helpers/searchBooks';
import { useForm } from '../../Hooks/useForm';
import useType from '../../Hooks/useType';

const UsuarioScreen = ({user}) => {
    //Veificando administrador
    useType(user.type);
    const [{search}, handleInputChange] = useForm({search:''});
    const usuarios = useSelector(state => state.users);
    
    //states
    const [users, setUsers] = useState([])
    const [searchUsers, setSearchUsers] = useState([])
    

    const dispatch = useDispatch();
    useEffect(() => {
        if(!usuarios.total){
            dispatch(startGetUsers());
        }else{
            setUsers([...usuarios.users])
        }
    }, [dispatch, usuarios]);

    
    
    
    useEffect(() => {
        setSearchUsers(busquedUsuario(users, search));
    }, [users,search]);
    
    

    
    return (
        <div className="container">
            <div className="_LibroScreen-body">
            <div className="buscar"> 
                    <input placeholder="Buscar por Nombre, NumeroC" className="form-control" name="search" value={search} onChange={handleInputChange}/>
                </div>
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
                       (searchUsers.length > 0) ? searchUsers.map(user => (<TableUsers user={user}/>)) : usuarios.users.map(user => (<TableUsers user={user}/>))

                    } 
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsuarioScreen
