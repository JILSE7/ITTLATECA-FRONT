import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../Helpers/fetch";
import { loginMesagges } from "../Helpers/login";
import { types } from "../Types/types"

export const startLogin = (data) => {
    return async(dispatch) => {

        const login = await (await fetchSinToken('auth/', data, 'POST')).json();
        
        if(!login.ok){
            loginMesagges(login);
            return;
        }

        if(login.ok){
            localStorage.setItem('token', login.token);
            dispatch(loginStore(login.user));
        }
    }
};


export const startChecking = () => {
    return async(dispatch) => {
        
        const login = await (await fetchConToken('/auth')).json();
    
        if(!login.ok){
            loginMesagges(login);
            return;
        }
    
        if(login.ok){ 
            localStorage.setItem('token', login.token);
            dispatch(loginStore(login.user));
        }
    }
    
    

}

export const loginStore = (user) => ({
        type: types.login,
        payload: user
});

