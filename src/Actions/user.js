import { fetchConToken } from "../Helpers/fetch";
import { booksMensaje, toastMessage } from "../Helpers/login";
import { types } from "../Types/types";
import { closeModalAction } from "./ui";


export const getUsers = (users, total) => ({
    type: types.getUser,
    payload: {users, total}
});
const postUser = () => ({type: types.postUser})
const editUser = () => ({type: types.editUser})
const deleteUser = () => ({type: types.deleteUser})


export const startGetUsers  = () => {
    return async(dispatch) => {

        const users = await (await fetchConToken('/usuarios')).json();
        console.log(users);
        if(!users.ok){
            booksMensaje(users.msg);
        }else{
            dispatch(getUsers(users.usuarios, users.total));
        }

    }
};


export const startPostUser = (data) => {
    return async(dispatch) => {
        const user= await (await fetchConToken('/usuarios', data,'POST')).json();
        console.log(user);
        if(!user.ok){
            booksMensaje(user.errors?.email?.msg || user.errors?.numeroC?.msg); 
        }else{
            dispatch(postUser());
            dispatch(startGetUsers());
            toastMessage(`Usuario ${user.usuario.nombre} fue agregado a la base de datos`);
            dispatch(closeModalAction());
        }
    }
};


export const startEditUser = (userId, data) => {
    return async(dispatch) => {

        try {
            const user= await (await fetchConToken(`usuarios/${userId}`, data,'PUT')).json();
    
            console.log(user);
            if(!user.ok){
                booksMensaje(user.msg); 
            }else{
                dispatch(editUser());
                dispatch(startGetUsers());
                toastMessage(`Usuario ${user.usuario.nombre} fue editado satisfactoriamente`);
                dispatch(closeModalAction());
            };
        } catch (error) {
            console.log(error);
        };
    };
};


export const startToogleConexion = (userId, activo) => {
    return async(dispatch) => {
        try {
            
            const user = await (await fetchConToken(`usuarios/conexion/${userId}`,{activo:!activo},'PUT')).json();
            console.log(user);
            if(!user.ok){
                booksMensaje(user.msg); 
            }else{
                dispatch(deleteUser());
                dispatch(startGetUsers());
                toastMessage(user.msg);
                dispatch(closeModalAction());
            };
        } catch (error) {
            console.log(error);
        }

    }
}


export const startDeleteUser = (userId, nombre) => {
    return async(dispatch) => {
        try {
            
            const user = await (await fetchConToken(`usuarios/${userId}`,{nombre},'DELETE')).json();
            console.log(user);
          
            if(!user.ok){
                booksMensaje(user.msg); 
            }else{
                dispatch(editUser());
                dispatch(startGetUsers());
                toastMessage(`El usuarion ${nombre} ${user.msg}`);
                dispatch(closeModalAction());
            }; 
        } catch (error) {
            console.log(error);
        }

    }
}


