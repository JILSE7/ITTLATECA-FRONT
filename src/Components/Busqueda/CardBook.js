import React from 'react';
import {RiUser2Fill} from 'react-icons/ri'
import {BiBookmarks} from 'react-icons/bi';
import {IoMdCheckmarkCircle, IoMdCloseCircle} from 'react-icons/io';
import {HiClock} from 'react-icons/hi';



const CardBook = ({libro, history, isDevolution = false, wasReturned}) => {
  console.log(wasReturned);
  const {nombre, imagen, autor,editorial, idLibro, _id} = libro;
    
  const handlerButton = () => {
    (_id) ?  history.push(`/libro/${_id}`) : history.push(`/libro/${idLibro}`);
    
  }
  
  

    return (
        <div className="busqueda-card" >
            <div className="imagen-libro">
                    <img src={imagen} alt="imagenlibro" />
            </div>
            <div className="card-body">
            <h5 className="card-titulo">{nombre}</h5>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {
                !isDevolution && (
                  <>
                      <div>
                          <RiUser2Fill className="_busquedas-activo"/>
                            <p> { autor && autor}</p>
                          </div>
                          <div>
                            <BiBookmarks/>
                            <p>{editorial && editorial}</p>
                          </div>
                          <div>
                            <IoMdCheckmarkCircle className="_busquedas-activo"/>
                            <p>Disponible</p>
                      </div>    
                  </>
                )
              }
              
                {
                    isDevolution && (

                                        (wasReturned.status) ? 

                                            (
                                              <>
                                                      <HiClock className="_busquedas-icon"/>
                                                      <p>Retiro: {wasReturned.fechaR}</p>
                                                      <HiClock className="_busquedas-icon"/>
                                                      <p>Devuelto: {wasReturned.fechaD}</p>
                                                      <IoMdCheckmarkCircle className="_busquedas-active"/>
                                                      <p>Devuelto</p>
                                              </>
                                            )

                                          :

                                          (
                                            <>  
                                                        <HiClock className="_busquedas-inactive"/>
                                                      <p className="_busquedas-inactive">Retiro: {wasReturned.fechaR}</p>
                                                      <HiClock className="_busquedas-inactive"/>
                                                      <p className="_busquedas-inactive">Devuelto: {wasReturned.fechaD}</p>      
                                                      <IoMdCloseCircle className="_busquedas-inactive"/>
                                                      <p className="_busquedas-inactive" >Pendiente por devolver</p>
                                            </>
                                          )
                    )
                }
            
               
             
                   <hr/>
                  <button className=" w-50 btn btn-outline-success" onClick={handlerButton}>Ver</button>
             
               
             
          </li>

        </ul>
      </div>
        
    )
}

export default CardBook
