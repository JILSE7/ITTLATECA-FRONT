

export const types = {
    //Logs
    login : "[AUTH] - LOGIN",
    logout : "[AUTH] LOGOUT",
    //Books
    getBooks : '[BOOKS] GET',
    destroyBooks: '[BOOKS] DESTROY',
    saveBooks: '[BOOKS] SAVE',
    //Users
    getUser : '[USERS] GET',

    //Prestamos
    getPrestamos: '[PRESTAMOS] GET',
    deletePrestamo: '[PRESTAMO] DELETE',
    editPrestamo: '[PRESTAMO] EDIT',
    addPrestamo: '[PRESTAMO] ADD',

    //UI
    openModal: '[MODAL] OPEN',
    closeModal: '[MODAL] CLOSE',

    //Active
    setActive : '[ACTIVE] SET',
    cleanActive: '[ACTIVE] CLEAN'
}