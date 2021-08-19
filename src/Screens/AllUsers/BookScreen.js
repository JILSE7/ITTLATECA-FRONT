import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { identificarLibro, indentificarLibroState } from '../../Helpers/searchBooks';
//Icons
import {GiWhiteBook} from 'react-icons/gi';
import {RiUser2Fill, RiPinDistanceLine} from 'react-icons/ri';
import {BiBookmarks} from 'react-icons/bi';
import {AiOutlineFieldNumber} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {IoMdCheckmarkCircle} from 'react-icons/io';





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
            <h1 className="mt-4 text-center">{libro.nombre}</h1>
            <main className="_bookScreen-body">
            <img src={libro.imagen} class="_bookScreen-imagen" alt="..."/>
                
                <div className="_bookScreen-info">
                    <h3 className="mt-3 mb-3  borderb">INFORMACIÓN</h3>
                    <table class="table table-custom">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">  <GiWhiteBook style={{fontSize: '24px'}}/>  </th>
                                    <td>{libro.nombre}</td>
                                </tr>
                                <tr>
                                    <th scope="row"> <RiUser2Fill style={{fontSize: '24px'}}/></th>
                                    <td>{libro.autor}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><BiBookmarks style={{fontSize: '24px'}}/></th>
                                    <td colspan="2">{libro.editorial}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><AiOutlineFieldNumber style={{fontSize: '24px'}}/></th>
                                    <td colspan="2">{libro.edicion}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><ImBooks style={{fontSize: '24px'}}/></th>
                                    <td colspan="2">{libro.existencias}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><IoMdCheckmarkCircle style={{fontSize: '24px'}}/></th>
                                    <td colspan="2">{libro.disponibles}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><RiPinDistanceLine style={{fontSize: '24px'}}/></th>
                                    <td colspan="2">{libro.ubicacion}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                </div> 
                

            </main>
        </div>
    )
}

export default BookScreen
