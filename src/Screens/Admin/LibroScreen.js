import React, { useEffect, useState } from 'react'
import { FaSearchengin } from 'react-icons/fa';
import { RiBook2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { startGetBooks } from '../../Actions/books';
import { openModalAction } from '../../Actions/ui';
import TableLibros from '../../Components/Busqueda/TableLibros';
import TableModal from '../../Components/Modal/TableModal';
import { libroTable } from '../../Helpers/searchBooks';
import { useForm } from '../../Hooks/useForm';
import useType from '../../Hooks/useType';


const LibroScreen = ({user}) => {
    //CustosHooks
    useType(user.type);
    const [{search}, handleInputChange] = useForm({search:''});
    //Redux
    const dispatch = useDispatch();
    const {libros} = useSelector(state => state.books);

    //estados
    const [librosArr, setlibros] = useState([]);
    const [busqueda, setBusqueda] = useState([])
    
    useEffect(() => {
        if(!libros.total){
            dispatch(startGetBooks());
        }else{
            setlibros([...libros.libros])
        }
    }, [libros, dispatch]);


    useEffect(() => {
            setBusqueda(libroTable(librosArr,search))
    }, [search, librosArr])


    const handlerClick = () =>{
        dispatch(openModalAction());
    }


    return (
        <div className="container">
            <div className="_LibroScreen-body">
                <div className="d-flex w-100">
                <div className="buscar"> 
                    <h3 className="text-center"><FaSearchengin/> Buscar</h3>
                    <input placeholder="Buscar por Nombre, Autor, Editorial" className="form-control mb-5 text-center w-50" name="search" value={search} onChange={handleInputChange}/>
                </div>
                <div className="añadir">
                    <h3>Añadir nuevo libro</h3>
                    <button className="btn btn-outline-success mb-5" onClick={handlerClick}>+ <RiBook2Line/></button>
                </div>
                </div>
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
                        (busqueda.length > 0) ?  busqueda.map((libro,i) => (<TableLibros libro={libro} key={i+libro.idLibro}/>)) : librosArr.map((libro,i) => (<TableLibros libro={libro} key={i+libro.idLibro}/>))

                    }
                </tbody>
                </table>
                <TableModal/>
            </div>
        </div>
    )
}

export default LibroScreen
