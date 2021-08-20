import React, { useState } from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { cleanActive } from '../../Actions/active';
import { closeModalAction } from '../../Actions/ui';

import {FcPicture} from 'react-icons/fc';


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

  
    const {modalOpen} = useSelector(state => state.ui)
    
    const dispatch = useDispatch();
    const {active, item} = useSelector(state => state.active);

    const [file, setFile] = useState("")
    let fileSelected;

   const closeModal  =() =>{
     dispatch(cleanActive());
     dispatch(closeModalAction());
   }

   const handlerSelectImage = (e) => {
     e.preventDefault();
     document.querySelector('#fileSelector').click();
   }
   const handlerFileChange = async(e) =>{

      fileSelected =  e.target.files[0];
      console.log(fileSelected);
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
                          setFile(fileSelected.name);
                        }else if(isDismissed){
                          setFile("");
                        
                        }
            }
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
          <form className="form-custom">
            <div className="inputsForm">
                <label>Nombre Libro</label>
                <input type="text"  className="form-control" />
                <label>Autor</label>
                <input type="text"  className="form-control" />
                <label>Editorial</label>
                <input type="text"  className="form-control" />
                <label> Edicion</label>
                <input type="text" className="form-control" />
                <label> Categoria</label>
                <input type="text"  className="form-control" />
                <label> Existencias</label>
                <input type="text"  className="form-control" />
                <label> Disponibles</label>
                <input type="text"  className="form-control" />
                <label> Ubicacion</label>
                <input type="text"  className="form-control" />
                <input type="file" id="fileSelector" style={{display:'none'}} onChange={handlerFileChange}/>
                  <label>Agregar Imagen</label> <FcPicture  onClick={handlerSelectImage} style={{fontSize: '74px'}}/>
                  <label>Nombre del Archivo: {(file)? file:'No ha seleccionado ninguna imagen'}</label>
                <button className="btn btn-outline-success mt-3 mb-3">Agregar</button>
                
            </div>
          </form>
        </div>
          </Modal>
    )
}

export default TableModal
