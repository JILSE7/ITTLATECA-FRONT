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
        case types.addPrestamo: 
        return state
    
        case types.deletePrestamo:
            return state
        
        case types.editPrestamo:
            return state

        case types.destroyPrestamos: 
        return initialState;
    
        default:
            return state;
    }
}


