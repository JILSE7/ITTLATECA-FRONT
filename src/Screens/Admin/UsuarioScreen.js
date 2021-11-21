import React, { useEffect, useState } from 'react'
import { FaSearchengin } from 'react-icons/fa';
import { RiBook2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAction } from '../../Actions/ui';
import { startGetUsers } from '../../Actions/user';
import TableUsers from '../../Components/Admin/TableUsers';
import ModalUsuario from '../../Components/Modal/ModalUsuario';
import { busquedUsuario } from '../../Helpers/searchBooks';
import { useForm } from '../../Hooks/useForm';
import useType from '../../Hooks/useType';

const UsuarioScreen = ({user}) => {
    //Veificando administrador
    useType(user.type);
    //Redux
    const [{search}, handleInputChange] = useForm({search:''});
    const dispatch = useDispatch();
    const usuarios = useSelector(state => state.users);
    
    //states
    const [users, setUsers] = useState([])
    const [searchUsers, setSearchUsers] = useState([])
    

    //Traer los usuarios en caso de que no esten
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
    
    
    const handlerClick = () => {
        dispatch(openModalAction());
    }
    
    return (
        <div className="container">
            <div className="_LibroScreen-body">
            <div className="d-flex w-100">
                <div className="buscar"> 
                    <h3 className="text-center"><FaSearchengin/> Buscar</h3>
                    <input placeholder="Buscar por Nombre o Numero de control" className="form-control mb-5 text-center w-50" name="search" value={search} onChange={handleInputChange}/>
                </div>
                <div className="añadir">
                    <h3>Añadir nuevo usuario</h3>
                    <button className="btn btn-outline-success mb-5" onClick={handlerClick}>+ <RiBook2Line/></button>
                </div>
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
                <ModalUsuario/>
            </div>
        </div>
    )
}

export default UsuarioScreen
