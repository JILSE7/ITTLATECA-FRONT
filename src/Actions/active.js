import { types } from "../Types/types";


export const setActive = (item) => ({type: types.setActive, payload: item})

export const cleanActive = (item) => ({type: types.cleanActive})