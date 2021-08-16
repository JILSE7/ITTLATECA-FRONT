import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { identificarLibro, indentificarLibroState } from '../../Helpers/searchBooks';

const BookScreen = () => {
    //Router
    const {id} = useParams();

    //Redux 
    const {LibrosBuscados} = useSelector(state => state.books);

    //state
    const [libro, setLibro] = useState({});
    
    useEffect(() => {
        if(LibrosBuscados.length > 0){
            const result = indentificarLibroState(LibrosBuscados,id);
            setLibro(result[0]);
            console.log('busque por state');
        }else{
            console.log('busque por fetch');
            identificarLibro(id)
                .then(({results}) => {
                    if(results.length > 0 ) setLibro(results[0])
                })
                .catch(console.log()) 
        }
    }, [id]);
    

    console.log(libro);
    return (
        <div className="container">
            <main className="_bookScreen-body">
                <div className="_bookScreen-imagen">
                    
                     <img src={libro.imagen} className="_bookScreen-imagen-f" alt="imagenlibro" />
                    
                </div>
                <div className="_bookScreen-info">Informacion</div>
            </main>
        </div>
    )
}

export default BookScreen
