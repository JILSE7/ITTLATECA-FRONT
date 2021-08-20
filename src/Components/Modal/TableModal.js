import Swal from 'sweetalert2';
import Modal from 'react-modal';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanActive } from '../../Actions/active';
import { closeModalAction } from '../../Actions/ui';
import {useForm} from '../../Hooks/useForm'

import {FcPicture} from 'react-icons/fc';
import { initialBook } from '../../Helpers/initialStates';
import { uploadPhoto } from '../../Helpers/fetch';
import { validarPostLibro } from '../../Helpers/validarCampos';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

const TableModal = () => {
    //Aux
    let fileSelected;

    //Redux
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const {active, item} = useSelector(state => state.active);
    
  console.log(item);
    

    //states
    const [values, handlerInputChange, reset, setValues] = useForm((!active) ?  initialBook:item);
    useEffect(() => setValues((!active) ?  initialBook:item) , [active]);


    const [file, setFile] = useState("")
    

   const closeModal  =() =>{
     dispatch(cleanActive());
     dispatch(closeModalAction());
     reset();
   }

   const handlerSelectImage = (e) => {
     e.preventDefault();
     document.querySelector('#fileSelector').click();
   }
   const handlerFileChange = async(e) =>{

      fileSelected =  e.target.files[0];
      
              if(fileSelected){
                const {isConfirmed, isDismissed} = await  Swal.fire({
                  imageUrl: URL.createObjectURL(fileSelected),
                  imageHeight: 300,
                  imageAlt: 'A tall image',
                          showCancelButton: true,
                          cancelButtonColor: '#d33',
                          cancelButtonText: 'cancel!'
                        });
                        
                        if(isConfirmed){
                          console.log('entre al confirm');
                          setFile(fileSelected.name);
                          
                        }else if(isDismissed){
                          setFile("");
                        }
            }
   }

   const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    validarPostLibro(values,dispatch, reset);
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
          <h1>{(active) ? "Editar" : "Nuevo"} Libro</h1>
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
                <input type="file" id="fileSelector" style={{display:'none'}} onChange={handlerFileChange}/>
                  <label>Agregar Imagen</label> <FcPicture  onClick={handlerSelectImage} style={{fontSize: '74px', cursor:'pointer'}}/>
                  <label>Nombre del Archivo: {(file)? file:'No ha seleccionado ninguna imagen'}</label>
                <button type='submit' className="btn btn-outline-success mt-3 mb-3">Agregar</button>
                
            </div>
          </form>
        </div>
          </Modal>
    )
}

export default TableModal
