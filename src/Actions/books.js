import Swal from "sweetalert2";
import { fetchConToken } from "../Helpers/fetch";
import { booksMensaje } from "../Helpers/login";
import { types } from "../Types/types";



export const getBooks = (books, total) => ({
    type: types.getBooks,
    payload: {books, total}
});




export const startGetBooks = () => {
    return async(dispatch) => {

        const libros = await (await fetchConToken('/libros')).json();
    
        if(!libros.ok){
            booksMensaje(libros);
        }else{
            dispatch(getBooks(libros.libros, libros.total));
        }

    }
}