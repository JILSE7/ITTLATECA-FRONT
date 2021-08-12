import Swal from "sweetalert2";



export const loginMesagges = (login) => {

    if(login.msg){
         Swal.fire({
            position: 'center',
            icon: 'error',
            title : login.msg, 
            showConfirmButton : false,
            timer: 2000,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `});
            return;
    }
    


    if(login.errors.password){
         Swal.fire({
            position: 'center',
            icon: 'error',
            title : login.errors.password.msg, 
            showConfirmButton : false,
            timer: 2000,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `});

            return
    }
}