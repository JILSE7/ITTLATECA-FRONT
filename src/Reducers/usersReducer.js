import { types } from '../Types/types';

const initialState = {
    users:[]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getUser:
            return{
                total: action.payload.total,
                users: [...action.payload.users]
            }
        case types.postUser: 
        return state

        case types.editUser: 
        return state

        case types.deleteUser: 
        return state
        
        default:
            return state;
    }
}


