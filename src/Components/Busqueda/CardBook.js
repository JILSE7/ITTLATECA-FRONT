import React from 'react';
import {RiUser2Fill} from 'react-icons/ri'
import {BiBookmarks} from 'react-icons/bi';
import {IoMdCheckmarkCircle} from 'react-icons/io';



const CardBook = ({libro, history}) => {
  const {nombre, imagen, autor,editorial, idLibro} = libro;
  const handlerButton = () => {
    history.push(`/libro/${idLibro}`);
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
              <div>
              <RiUser2Fill/>
                <p> {autor}</p>
              </div>
              <div>
                <BiBookmarks/>
                <p>{editorial}</p>
              </div>
              <div>
                <IoMdCheckmarkCircle/>
                <p>Disponible</p>
              </div>

              <hr/>
              <button className=" w-50 btn btn-outline-success" onClick={handlerButton}>Ver</button>
          </li>

        </ul>
      </div>
        
    )
}

export default CardBook
