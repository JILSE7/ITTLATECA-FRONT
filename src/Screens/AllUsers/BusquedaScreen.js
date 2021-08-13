import React from 'react'

const BusquedaScreen = () => {
    return (
        <div className="container">
            <div>
                <h2 className="text-center">¿Que Libro buscaremos el dia de hoy?</h2>
                <div className="_busquedas_info">
                    <p>Recuerda que puedes buscar por: </p>
                    <ul>
                            <li>Nombre del libro</li>
                            <li>Auto del libro</li>
                            <li>Categoria del libro</li>
                    </ul>
                </div>
                <div className="_busquedas_form">
                    <form>
                        <input type="text" placeholder="Busquemos un libro" className="form-control"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BusquedaScreen
