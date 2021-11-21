

export const types = {
    //Logs
    login : "[AUTH] - LOGIN",
    logout : "[AUTH] LOGOUT",
    //Books
    getBooks : '[BOOKS] GET',
    destroyBooks: '[BOOKS] DESTROY',
    saveBooks: '[BOOKS] SAVE',
    deleteBook: '[BOOK] DELETE',
    toogleUser: '[BOOK] TOOGLE',
    //Users
    getUser : '[USERS] GET',
    postUser: '[USERS] POST',
    editUser: '[USERS] EDIT',
    deleteUser: '[USERS] DELETE',

    //Prestamos
    getPrestamos: '[PRESTAMOS] GET',
    deletePrestamo: '[PRESTAMO] DELETE',
    editPrestamo: '[PRESTAMO] EDIT',
    addPrestamo: '[PRESTAMO] ADD',
    destroyPrestamos: '[PRESTAMOS] DESTROY',    
    //Prestamos User
    getPrestamoById : '[PRESTAMOS_ID] GET',

    //UI
    openModal: '[MODAL] OPEN',
    closeModal: '[MODAL] CLOSE',

    //Active
    setActive : '[ACTIVE] SET',
    cleanActive: '[ACTIVE] CLEAN'
}