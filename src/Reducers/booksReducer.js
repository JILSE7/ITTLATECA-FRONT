import { types } from "../Types/types";

const initialState ={
    LibrosBuscados: [] 
}


export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        /* case types.getBooks:
            return{
                total: action.payload.total,
                libros : action.payload.books
            }; */
            case types.destroyBooks:
                return {
                    libros: []
                }
            case types.saveBooks:
                console.log(action.payload.books);
                return {
                    ...state,
                    LibrosBuscados: action.payload
                }
        default:
            return state;
    }
}