
//Modal
export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export const initialBook = {
    nombre : "",
    autor : "",
    editorial : "",
    edicion : "",
    categoria : [],
    existencias : "",
    disponibles : "",
    ubicacion : "",
}


export const initialPrestamo = {
        usuario : "",
        libro : "",
        fechaRetiro : "",
        fechaDevolucion : "",
        observaciones : ""
}