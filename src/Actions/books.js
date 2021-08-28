import { fetchConToken, fetchConTokenPrueba } from "../Helpers/fetch";
import { booksMensaje, toastMessage } from "../Helpers/login";
import { types } from "../Types/types";



export const getBooks = (books, total) => ({
    type: types.getBooks,
    payload: {books, total}
});

const deleteBook = () => ({type: types.deleteBook})
const toggleBook = () => ({type: types.toogleUser})




export const startGetBooks = () => {
    return async(dispatch) => {

        const libros = await (await fetchConToken('/libros')).json();
    
        if(!libros.ok){
            booksMensaje(libros);
        }else{
            dispatch(getBooks(libros.libros, libros.total));
        }

    }
};


export const destroyBooks = () => ({
    type: types.destroyBooks
});


export const saveBooks = (books) => {
    return {
    type: types.saveBooks,
    payload : books
}
};



//Agregar libro 
export const addLibro = (libro) => {
    return async(dispatch) => {
        console.log(libro);
    }
};

//Eliminar - Desactivar Libros
export const startToggleLibro = (idLibro, activo) => {
    return async(dispatch) => {

        const resp = await (await fetchConTokenPrueba(`libros/unable/${idLibro}`,{activo: !activo}, 'PUT')).json();

        if(!resp.ok){
            booksMensaje(resp);
        }else{
            toastMessage(resp.msg);
            dispatch(toggleBook())
            dispatch(startGetBooks());
            //dispatch(startGetBooks());
        }    

    };
};

export const startDeleteLibro = (idLibro) => {
    return async(dispatch) => {

        const resp = await (await fetchConTokenPrueba(`libros/${idLibro}`,{}, 'DELETE')).json();

        if(!resp.ok){
            booksMensaje(resp);
        }else{
            toastMessage(resp.msg);
            dispatch(deleteBook())
            dispatch(startGetBooks());
            //dispatch(startGetBooks());
        }    

    };
};