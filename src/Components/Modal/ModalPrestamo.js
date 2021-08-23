import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { cleanActive } from '../../Actions/active';
import { closeModalAction } from '../../Actions/ui';
//Helpers & Hooks
import {useForm} from '../../Hooks/useForm'
import { customStyles, initialBook, initialPrestamo } from '../../Helpers/initialStates';
import { validarPostLibro } from '../../Helpers/validarCampos';

import {FcPicture} from 'react-icons/fc';
import {HiBadgeCheck, HiXCircle} from 'react-icons/hi';
import { startGetUsers } from '../../Actions/user';
import { busquedaUsuarioModal, busquedUsuario } from '../../Helpers/searchBooks';
import { TextField } from '@material-ui/core';
import CompleteUser from '../AutoComplete/CompleteUser';
import CompleteLibro from '../AutoComplete/CompleteLibro';
import { startGetBooks } from '../../Actions/books';



  Modal.setAppElement('#root');

const ModalPrestamo = () => {
    //Aux
    let fileSelected = '';

    //Redux
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const {active, item} = useSelector(state => state.active);
    const usuarios = useSelector(state => state.users);
    const {libros} = useSelector(state => state.books);
    
    //states
    const [values, handlerInputChange, reset, setValues] = useForm((!active) ?  initialPrestamo:item);

    console.log(values);
    //Para buscar a los usuarios y libros
    const [users, setUsers] = useState([]);
    const [librosArr, setlibros] = useState([]);

    
    //Effects
    useEffect(() => setValues((!active) ?  initialPrestamo:item) , [active]);
    
    useEffect(() => {//Traer usuarios 
      if(!usuarios.total){
          dispatch(startGetUsers());
      }else{
          setUsers([...usuarios.users])
      }
  }, [dispatch, usuarios, libros]);

  useEffect(() => {
    if(!libros.total){
        dispatch(startGetBooks());
    }else{
        setlibros([...libros.libros])
    }
}, [libros, dispatch]);

  
    const closeModal  =() =>{
      dispatch(cleanActive());
      dispatch(closeModalAction());
      reset();
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        //validarPostLibro(values,dispatch, reset, (active) ? true : false);
    }

    const autoClick =(e) => {
      console.log(e);
    }
    
    return (
        <Modal
        isOpen={modalOpen}
      /*   onAfterOpen={afterOpenModal}*/
        onRequestClose={closeModal} 
        style={customStyles}
        className="modal"
        closeTimeoutMS={200}
        overlayClassName="modal-fondo"
      >
        <div className="modal-form">
          <h1>Prestamo</h1>
          <hr/>
          <form className="form-custom" onSubmit={handlerSubmit}>
            <div className="inputsForm">
                <label>Usuario</label>
                {active ? (<input type="text"  className="form-control"  disabled name="usuario" value={values.usuario.nombre} onChange={handlerInputChange}/>)  : (<CompleteUser obj={values} users={users}/>)}

                
                <label>Libro</label>
                {active ? (<input type="text"  className="form-control"  disabled name="libro" value={ values.libro.nombre} onChange={handlerInputChange}/>)  : (<CompleteLibro obj={values} books={librosArr}/>)}
                
                <label> Fecha de retiro</label>
                <input type="text" className="form-control"  name="fechaRetiro" value={values.fechaRetiro} onChange={handlerInputChange}/>
                <label> Fecha de devolucion</label>
                <input type="text"  className="form-control"  name="fechaDevolucion" value={values.fechaDevolucion} onChange={handlerInputChange}/>
                {active && <>
                  <label> Devolucion</label>
                  <p>{(values.devolucion)? <HiBadgeCheck/>: <HiXCircle/>}</p>
                </>}
                <label> Observaciones</label>
                <input type="text"  className="form-control"  name="observaciones" value={values.observaciones} onChange={handlerInputChange}/>
                
                <button type='submit' className="btn btn-outline-success mt-3 mb-3">{(active) ? "Editar" : "Agregar"}</button>
                  
                
                
            </div>
          </form>
          
        </div>
          </Modal>
    )
}

export default ModalPrestamo;