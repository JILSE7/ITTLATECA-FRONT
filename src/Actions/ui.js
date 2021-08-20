import { types } from "../Types/types";
export const openModalAction = () => ({type: types.openModal, payload: true});
export const closeModalAction = () => ({type: types.closeModal, payload: false});