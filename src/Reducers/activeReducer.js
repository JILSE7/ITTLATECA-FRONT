import { types } from "../Types/types";



const initialState = {
    active  : false,
};


export const activeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setActive:
            return{
                active:true,
                item: {...action.payload}
            };
        case types.cleanActive: 
        return{
            active:false
        }
        default:
            return state;
    }
}