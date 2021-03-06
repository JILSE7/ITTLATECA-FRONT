import Swal from "sweetalert2";

//toast
export const Toast = Swal.mixin({ 
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  

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


export const booksMensaje =(msg) => {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        title : msg, 
        showConfirmButton : false,
        timer: 3000,
        padding: '3em',
        background: '#fff',
        backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
        `});
};


export const swalMenssage = (msg) => {
    return Swal.fire({
        position: 'center',
        icon: 'error',
        title : msg, 
        showConfirmButton : false,
        timer: 2000,
        padding: '3em',
        background: '#fff',
        backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
        `});
}


export const toastMessage = (msg) => {
        Toast.fire({
            icon: 'success',
            title: `${msg}`
          });
};


export const isConfirmed = async(nombre,mensaje  ,edit=true, icon) => {
    const {isConfirmed} = await Swal.fire({
        title: (edit)? `??Est??s seguro de editar ${mensaje} de ${nombre} ` : `??Est??s seguro de eliminar ${mensaje} de  ${nombre} ` ,
        icon, showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText:(edit) ?  'Editar': 'Borrar',cancelButtonText: '!No, Espera??'
    });
    
   return isConfirmed;
}

export const isConexion = async(nombre,unable=true, icon) => {
    const {isConfirmed} = await Swal.fire({
        title: (!unable)? `??Est??s seguro de activar al usuario ${nombre} ` : `??Est??s seguro de desactivar al usuario  ${nombre} ` ,
        icon, showCancelButton: true, confirmButtonColor: '#198754', cancelButtonColor: '#d33', confirmButtonText:(!unable) ?  'Activar': 'Desactivar',cancelButtonText: '!No, Espera??'
    });
    
   return isConfirmed;
}

export const devolucionMessage = async(nombreLibro) => {
    const { value: accept } = await Swal.fire({
        title: `Esta seguro de realizar esta devolucion de este libro ${nombreLibro}`,
        confirmButtonText:
          'Si, Halza!??<i class="fa fa-arrow-right"></i>',
        showCancelButton: true,
      cancelButtonColor: '#d33'
      })
    
      if (accept) {
        return true;
      }else{
          return false;
      }

}