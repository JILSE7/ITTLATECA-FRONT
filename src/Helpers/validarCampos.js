import Swal from "sweetalert2";
import { startGetBooks } from "../Actions/books";
import { closeModalAction } from "../Actions/ui";
import { uploadPhoto } from "./fetch";



//toast
const Toast = Swal.mixin({
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
  



export const validarPostLibro = (libro, dispatch, reset) => {

    if(!libro.nombre || !libro.autor || !libro.editorial || !libro.edicion || !libro.categoria || !libro.existencias || !libro.disponibles || !libro.ubicacion){
        console.log('Campos vacios || verifiquelos porfavor');
    }else{
        //Alerta de confirmacion
        Swal.fire({
            title: `¿Estás seguro de agregar el libro ${libro.nombre} ?`,
            text: "¡Posteriormente sera guardada en la base de datos",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Guardar',
            cancelButtonText: '!No, Espera¡'
          }).then(async(result) => { //Promesa
            if (result.isConfirmed) {
                try {
                    const resp = await uploadPhoto(libro); //subida
                    if(resp.ok){
                        Toast.fire({
                            icon: 'success',
                            title: `Libro ${resp.libro.nombre} agregado`
                          });
                          //Redux
                          dispatch(startGetBooks());
                          reset();
                          dispatch(closeModalAction());
                    }else{
                        Toast.fire({
                            icon: 'error',
                            title: `${resp.msg}`
                          });
                    };
                    
                } catch (error) {
                    console.log(error);
                }}}); //Fin de la promesa

            }
}




