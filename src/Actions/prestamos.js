import { fetchSinToken } from "../Helpers/fetch";
import { booksMensaje } from "../Helpers/login";
import { types } from "../Types/types";



const getPrestamos = (total, prestamos) => ({
    type: types.getPrestamos,
    payload: {total, prestamos}
});



export const startGetPrestamos = () => {
    return async(dispatch) => {

        const prestamos = await (await fetchSinToken('/prestamos')).json();

        if(!prestamos.ok){
            booksMensaje(prestamos);
        }else{
            dispatch(getPrestamos(prestamos.total, prestamos.prestamos));
        }
        console.log(prestamos);
    }
}