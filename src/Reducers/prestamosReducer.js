import { types } from "../Types/types";



const initialState = {
    prestamos: []
}

export const prestamosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getPrestamos:
        return {
            total: action.payload.total,
            prestamos: [...action.payload.prestamos]
        }
    
        default:
            return state;
    }
}


