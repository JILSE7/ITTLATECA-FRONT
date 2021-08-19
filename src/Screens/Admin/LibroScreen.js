import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { startGetBooks } from '../../Actions/books';
import TableLibros from '../../Components/Busqueda/TableLibros';
import { noAutorizado } from '../../Helpers/noAutorizado';
import useType from '../../Hooks/useType';


const LibroScreen = ({user}) => {
    
    useType(user.type);

    const dispatch = useDispatch();
    const {libros} = useSelector(state => state.books);
    const [librosArr, setlibros] = useState([])
    
    useEffect(() => {
        if(!libros.total){
            dispatch(startGetBooks());
        }else{
            setlibros([...libros.libros])
        }
    }, [libros]);

    console.log(libros);




    

/*     if(!type){
        return (
            <p>checando</p>
        )
    } */

    return (
        <div className="container">
            <div className="_LibroScreen-body">
                Buscar
            <table class="table">
                <thead>
                    <tr className="text-center font-id">
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">imagen</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Editorial</th>
                    <th scope="col">Edicion</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Existencias</th>
                    <th scope="col">Disponibles</th>
                    <th scope="col">Ubicacion</th>
                    <th scope="col">Prestamos</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {  
                        librosArr.map(libro => (<TableLibros libro={libro}/>))

                    }
                    
                
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default LibroScreen
