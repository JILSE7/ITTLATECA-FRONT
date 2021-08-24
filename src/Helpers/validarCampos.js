import Swal from "sweetalert2";
import { cleanActive } from "../Actions/active";
import { startGetBooks } from "../Actions/books";
import { startAddPrestamo, startEditPrestamo } from "../Actions/prestamos";
import { closeModalAction } from "../Actions/ui";
import { agregarLibro, editarLibro } from "./fetch";
import { swalMenssage, Toast } from "./login";







export const validarPostLibro = async (libro, dispatch, reset, edit = false) => {
    console.log(edit);
    if(!libro.nombre || !libro.autor || !libro.editorial || !libro.edicion || !libro.categoria || !libro.existencias || !libro.disponibles || !libro.ubicacion){
        console.log('Campos vacios || verifiquelos porfavor');
        return;
    }
    
    if(edit){
        console.log('Vamos a editar');
        await editBookPromise(libro,dispatch, reset);
    }else{
        await agregarBookPromise(libro, dispatch, reset);
    }
}

export const validarPostPrestamo = (prestamo, dispatch, edit = false) => {
    console.log(prestamo, edit);

    if(!prestamo.usuario || !prestamo.libro || !prestamo.fechaRetiro || !prestamo.fechaDevolucion || !prestamo.observaciones){
        return true;
    } 

    if(edit){
        console.log('Vamos a editar');
        dispatch(startEditPrestamo(prestamo.idPrestamo, prestamo))
    }else{
        console.log('vamos a agregar');
        dispatch(startAddPrestamo(prestamo));
        //await agregarBookPromise(libro, dispatch, reset);
    }


}


const agregarBookPromise = (libro, dispatch, reset) => {
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
                const resp = await agregarLibro(libro,'libros'); //subida
                if(resp.ok){
                    Toast.fire({
                        icon: 'success',
                        title: `Libro ${resp.libro.nombre} agregado`
                      });
                      //Redux
                      dispatch(startGetBooks());
                      reset();
                      dispatch(cleanActive());
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

};



const editBookPromise = async(libro,dispatch, reset) => {
    
    try {
        const resp = await editarLibro(libro,'libros');
    
        if(resp.ok){
            Toast.fire({
                icon: 'success',
                title: `Libro ${resp.Libro.nombre} actualizado`
              });
              //Redux
              dispatch(startGetBooks());
              reset();
              dispatch(cleanActive());
              dispatch(closeModalAction());
        }else{
            Toast.fire({
                icon: 'error',
                title: `${resp.msg}`
              });
        };
        
    } catch (error) {
        console.log(error);
    }

}










