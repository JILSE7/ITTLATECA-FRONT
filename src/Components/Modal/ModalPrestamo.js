import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { cleanActive } from '../../Actions/active';
import { closeModalAction } from '../../Actions/ui';
import { startGetUsers } from '../../Actions/user';
import { startGetBooks } from '../../Actions/books';
//Helpers & Hooks
import {useForm} from '../../Hooks/useForm'
import { customStyles, initialBook, initialPrestamo, resetPrestamo } from '../../Helpers/initialStates';
import { validarPostLibro, validarPostPrestamo } from '../../Helpers/validarCampos';

//Components
import CompleteUser from '../AutoComplete/CompleteUser';
import CompleteLibro from '../AutoComplete/CompleteLibro';
import Fecha from '../DatePicker/Fecha';

//Icons
import {HiBadgeCheck, HiXCircle} from 'react-icons/hi';


Modal.setAppElement('#root');

const ModalPrestamo = () => {
      //Redux
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const {active, item} = useSelector(state => state.active);
    const usuarios = useSelector(state => state.users);
    const {libros} = useSelector(state => state.books);
    
    //states
    const [values, handlerInputChange, reset, setValues] = useForm((!active) ?  initialPrestamo:item);

    //Para buscar a los usuarios y libros
    const [users, setUsers] = useState([]);
    const [librosArr, setlibros] = useState([]);
    //Para retroalimentar campos vacios
    const [validate, setValidate] = useState(false)

    
    //Effects
    useEffect(() => setValues((!active) ?  initialPrestamo:item) , [active]);
    
    useEffect(() => {//Traer usuarios 
      if(!usuarios.total){
          dispatch(startGetUsers());
      }else{
          setUsers([...usuarios.users])
      }
  }, [dispatch, usuarios, libros]);

  useEffect(() => {//Traer libros
    if(!libros.total){
        dispatch(startGetBooks());
    }else{
        setlibros([...libros.libros])
    }
}, [libros, dispatch]);

  
    const closeModal  =() =>{ //Cerrar el modal
      dispatch(cleanActive());
      dispatch(closeModalAction());
      resetPrestamo(values);
      
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        const resp = validarPostPrestamo(values, dispatch,  (active) ? true : false ); 

        if(resp){
          setValidate(true) 
          setTimeout(() => setValidate(false), 2000);
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
          <h1>Prestamo</h1>
          <hr/>
          <form className="form-custom" onSubmit={handlerSubmit}>
            <div className="inputsForm">
                <label>Usuario</label>
                {active ? (<input type="text"  className="form-control"  disabled name="usuario" value={values.usuario.nombre} onChange={handlerInputChange}/>)  : (<CompleteUser obj={values} users={users}/>)}

                
                <label>Libro</label>
                {active ? (<input type="text"  className="form-control"  disabled name="libro" value={ values.libro.nombre} onChange={handlerInputChange}/>)  : (<CompleteLibro obj={values} books={librosArr}/>)}
                
                <label> Fecha de retiro</label>
                {active ? <Fecha  values={values} edit={true} /> : <Fecha  values={values} />  }
                
                <label> Fecha de devolucion</label>
                
                {active ? <Fecha values={values} retiro={false} edit={true}/> : <Fecha values={values} retiro={false} />  }
                
                {active && <>
                  <label> Devolucion</label>
                  <p>{(values.devolucion)? <HiBadgeCheck/>: <HiXCircle/>}</p>
                </>}
                <label> Observaciones</label>
                <input type="text"  className="form-control"  name="observaciones" value={values.observaciones} onChange={handlerInputChange}/>
                
                <button type='submit' className="btn btn-outline-success mt-3 mb-3">{(active) ? "Editar" : "Agregar"}</button>
                                
            </div>
          </form>
       { validate &&   <div class="alert alert-danger validate" role="alert"> A simple warning alert—check it out! </div>}
          {active &&
           (<>
           <p>En la edicion de los prestamos solo se puede cambiar las fechas de retiro y entrega, al igual que las observaciones</p> 
           <p>Si te equivocaste de usuario, porfavor borra este prestamo o si lo que quieres es realizar la devolucion, Haz click en la manita</p> 
           </>)
           }
        </div>
          </Modal>
    )
}

export default ModalPrestamo;