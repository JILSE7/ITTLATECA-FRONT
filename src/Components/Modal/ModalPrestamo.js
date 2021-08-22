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



  Modal.setAppElement('#root');

const ModalPrestamo = () => {
    //Aux
    let fileSelected = '';

    //Redux
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const {active, item} = useSelector(state => state.active);
    
    //states
    const [values, handlerInputChange, reset, setValues] = useForm((!active) ?  initialPrestamo:item);
    const [file, setFile] = useState("")
    
    
    useEffect(() => setValues((!active) ?  initialBook:item) , [active]);
    
  
    
    const closeModal  =() =>{
      dispatch(cleanActive());
      dispatch(closeModalAction());
      reset();
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        validarPostLibro(values,dispatch, reset, (active) ? true : false);
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
                <label>Nombre Libro</label>
                <input type="text"  className="form-control"  name="nombre" value={values.nombre} onChange={handlerInputChange}/>
                <label>Autor</label>
                <input type="text"  className="form-control"  name="autor" value={values.autor} onChange={handlerInputChange}/>
                <label>Editorial</label>
                <input type="text"  className="form-control"  name="editorial" value={values.editorial} onChange={handlerInputChange}/>
                <label> Edicion</label>
                <input type="text" className="form-control"  name="edicion" value={values.edicion} onChange={handlerInputChange}/>
                <label> Categoria</label>
                <input type="text"  className="form-control"  name="categoria" value={values.categoria} onChange={handlerInputChange}/>
                <label> Existencias</label>
                <input type="text"  className="form-control"  name="existencias" value={values.existencias} onChange={handlerInputChange}/>
                <label> Disponibles</label>
                <input type="text"  className="form-control"  name="disponibles" value={values.disponibles} onChange={handlerInputChange}/>
                <label> Ubicacion</label>
                <input type="text"  className="form-control"  name="ubicacion" value={values.ubicacion} onChange={handlerInputChange}/>
                
                <button type='submit' className="btn btn-outline-success mt-3 mb-3">{(active) ? "Editar" : "Agregar"}</button>
                
            </div>
          </form>
        </div>
          </Modal>
    )
}

export default ModalPrestamo;