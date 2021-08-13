import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetBooks } from '../../Actions/books';

const BusquedaScreen = () => {
    //Redux
    const dispatch = useDispatch();
    const {total, libros} = useSelector(state => state.books);
        
    useEffect(() => { if(!total)dispatch(startGetBooks()) }, [dispatch, total]);


    return (
        <div className="container">
            <div>
                <h2 className="text-center mt-3">¿Que Libro buscaremos el dia de hoy?</h2>
                <div className="_busquedas_info">
                    <h4 className="mb-4">Recuerda que puedes buscar por: </h4>
                    <ul>
                            <li>Nombre del libro</li>
                            <li>Auto del libro</li>
                            <li>Categoria del libro</li>
                    </ul>
                    <p>{total} Libros en biblioteca</p>
                </div>
                <div className="_busquedas_form">
                    <form>
                        <input type="text" placeholder="Busquemos un libro" className=" form form-control"/>
                        <button className="btn btn-outline-success">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BusquedaScreen
