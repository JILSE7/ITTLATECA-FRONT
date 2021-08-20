import { types } from "../Types/types";


const initialState = {
    modalOpen : false
}


export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openModal:
            return {
                modalOpen: action.payload
            };
        
        case types.closeModal: 
        return {
            modalOpen: action.payload
        }
        default:
            return state;
    }
}