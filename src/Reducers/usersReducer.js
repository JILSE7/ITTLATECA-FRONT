import React from 'react'
import { types } from '../Types/types';

const initialState = {
    users:[]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getUser:
            console.log(action.payload);
            return{
                total: action.payload.total,
                users: [...action.payload.users]
            }
    
        default:
            return state;
    }
}


