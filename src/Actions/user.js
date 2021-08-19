import { fetchConToken } from "../Helpers/fetch";
import { booksMensaje } from "../Helpers/login";
import { types } from "../Types/types";


export const getUsers = (users, total) => ({
    type: types.getUser,
    payload: {users, total}
});



export const startGetUsers  = () => {
    return async(dispatch) => {

        const users = await (await fetchConToken('/usuarios')).json();
        console.log(users);
        if(!users.ok){
            booksMensaje(users);
        }else{
            dispatch(getUsers(users.usuarios, users.total));
        }

    }
}
