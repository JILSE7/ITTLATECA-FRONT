import { types } from "../Types/types";



const initialState = {
    ok:false,
    prestamos: [],
    total: null
}

export const prestamosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getPrestamos:
        return {
            ok:true,
            total: action.payload.total,
            prestamos: [...action.payload.prestamos]
        }
    
        default:
            return state;
    }
}


