import { types } from "../Types/types";


/*
    login = true,
    user: {data}


*/


const initialState = {
    login: false,
    user: {}
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                user: {...action.payload},
                login:true
            };
        case types.logout:
            return {login: false, user:{}};
        default:
            return state;
    }
}