import { fetchConToken, fetchConTokenPrueba, fetchSinToken, fetchSinTokenPrueba } from "../Helpers/fetch";
import { booksMensaje, toastMessage } from "../Helpers/login";
import { types } from "../Types/types";



const getPrestamos = (total, prestamos) => ({
    type: types.getPrestamos,
    payload: {total, prestamos}
});

const deletePrestamo = () => ({type: types.deletePrestamo});



export const startGetPrestamos = () => {
    return async(dispatch) => {

        const prestamos = await (await fetchSinTokenPrueba('/prestamos')).json();
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
            const resp = await (await fetchConToken(`/prestamos/${idPrestamo}`, data, 'DELETE')).json();
            if(!resp.ok){
                booksMensaje(resp);
            }else{
                toastMessage(resp)
                dispatch(startGetPrestamos());
            }    
        } catch (error) {
            console.log(error);
        }
    }
}