import { types } from "../Types/types";

const initialState ={
    libros: [] 
}


export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getBooks:
            return{
                total: action.payload.total,
                libros : action.payload.books
            }
        default:
            return state;
    }
}