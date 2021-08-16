import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveBooks } from '../../../Actions/books';
import CardBook from '../../../Components/Busqueda/CardBook';
import { busquedaBooks } from '../../../Helpers/searchBooks';
import { useForm } from '../../../Hooks/useForm';


const BusquedaScreen = ({history}) => {
    //Redux
    const dispatch = useDispatch();
    const {total} = useSelector(state => state.books);

    //useEffect(() => { if(!total)dispatch(startGetBooks()) }, [dispatch, total]);
    const [libros, setlibros] = useState([]);

    //UseForm
    const [{search}, handleInputChange] = useForm({search: ''});

    const handlerSubmit = async(e)=> {
        e.preventDefault();
        const {ok, results} =  await busquedaBooks(search)
        if(ok){
            if(results && results.length > 0){
                setlibros([...results]);
                dispatch(saveBooks(results))
            };
        }else{
            console.log('error');
        };
    };

  
    console.log(libros);


    return (
        <div className="container">
            
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
                    <form onSubmit={handlerSubmit}>
                        <input type="text" placeholder="Busquemos un libro" className=" form form-control" name="search" value={search} onChange={handleInputChange}/>
                        <button type="submit" className="btn btn-outline-success">Buscar</button>
                    </form>
                </div>
                <div className="_busquedas-result">

                    <div className="_busqueda-card-padre">
                                    {
                                        libros && libros.map((libro, i) => (<CardBook libro={libro} key={i+'book'} history={history}/>))
                                    }
                    </div>
                </div>
            
        </div>
    )
}

export default BusquedaScreen
