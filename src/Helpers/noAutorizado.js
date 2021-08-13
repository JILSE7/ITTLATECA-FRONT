import Swal from "sweetalert2";



export const noAutorizado = () => (    
         Swal.fire({
            position: 'center',
            icon: 'error',
            title : 'Usted no tiene los permisos para tareas de administrador', 
            showConfirmButton : false,
            timer: 2000,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `})
            
)
    
