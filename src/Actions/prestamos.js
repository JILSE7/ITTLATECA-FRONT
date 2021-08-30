import { fetchConToken, fetchConTokenPrueba, fetchSinToken, fetchSinTokenPrueba } from "../Helpers/fetch";
import { booksMensaje, toastMessage } from "../Helpers/login";
import { types } from "../Types/types";
import { cleanActive } from "./active";
import { startGetBooks } from "./books";
import { closeModalAction } from "./ui";



const getPrestamos = (total, prestamos) => ({
    type: types.getPrestamos,
    payload: {total, prestamos}
});

const deletePrestamo = () => ({type: types.deletePrestamo});

const addPrestamo = () => ({type: types.addPrestamo });

const editPrestamo = () => ({type: types.editPrestamo });



export const startGetPrestamos = () => {
    return async(dispatch) => {

        const prestamos = await (await fetchSinToken('/prestamos')).json();
        console.log(prestamos);
        if(!prestamos.ok){
            booksMensaje(prestamos);
        }else{
            dispatch(getPrestamos(prestamos.total, prestamos.prestamos));
        }
        console.log(prestamos);
    }
}


export const startDeletePrestamo = (idPrestamo, data ) => {
    return async(dispatch) => {
        try {
            const resp = await (await fetchConToken(`prestamos/${idPrestamo}`, data, 'DELETE')).json();
            if(!resp.ok){
                booksMensaje(resp);
            }else{
                toastMessage('Prestamo eliminado de la base de datos')
                dispatch(deletePrestamo())
                dispatch(startGetPrestamos());
                //dispatch(startGetBooks());
            }    
        } catch (error) {
            console.log(error);
        }
    }
};

export const startAddPrestamo = (data) => {
    return async(dispatch) => {
        try {
            const resp = await (await fetchConToken('prestamos',data,'POST')).json();
            
            if(!resp.ok){
                booksMensaje(resp.msg);
            }else{
                toastMessage(`Prestamos Agregado a la base datos`)
                dispatch(addPrestamo());
                dispatch(startGetPrestamos());
                //dispatch(startGetBooks());
                dispatch(closeModalAction());
            }    
        } catch (error) {
            console.log(error);
            booksMensaje(error)
        }
    }

};



export const startEditPrestamo = (IdPrestamo,data) => {
        return async(dispatch) => {
            try {
                const resp = await (await fetchConToken(`prestamos/${IdPrestamo}`,data,'PUT')).json();
                console.log(resp);
    
                if(!resp.ok){
                    booksMensaje(resp.msg);
                }else{
                    dispatch(editPrestamo());
                    dispatch(startGetPrestamos());
                    toastMessage(resp.msg)
                    dispatch(cleanActive());
                    dispatch(startGetBooks());
                    dispatch(closeModalAction());
                }    
            } catch (error) {
                console.log(error);
                booksMensaje(error)
            }
        }
    
}



export const startDevolucion = (idPrestamo) => {
    const data = {devolucion : true};
    return async(dispatch) => {
        try {
            const resp = await (await fetchConToken(`prestamos/${idPrestamo}`,data,'PUT')).json();
            if(!resp.ok){
                booksMensaje(resp.msg);
            }else{
                dispatch(editPrestamo());
                dispatch(startGetPrestamos());
                toastMessage(`Prestamo con id ${idPrestamo} actualizado`)
                dispatch(cleanActive());
                dispatch(startGetBooks());
                dispatch(closeModalAction());
            }    
        } catch (error) {
            console.log(error);
        }
    }
}