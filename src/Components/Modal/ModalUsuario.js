import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { cleanActive } from '../../Actions/active';
import { closeModalAction } from '../../Actions/ui';

//Helpers & Hooks
import {useForm} from '../../Hooks/useForm'
import { carrers, customStyles, initialPrestamo, initialUser } from '../../Helpers/initialStates';
import { validarUsuario } from '../../Helpers/validarCampos';

Modal.setAppElement('#root');


const ModalUsuario = () => {
  
  
  
      //Redux
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const {active, item} = useSelector(state => state.active);
    
    
    //states
    const [values, handlerInputChange, reset, setValues] = useForm((!active) ?  initialUser:item);
    
    //Para retroalimentar campos vacios
    const [confirmPass, setConfirmPass] = useState('');
    const [validate, setValidate] = useState(false)

    
    //Effects
    useEffect(() =>setValues((!active) ?  initialUser:item)       , [active,item, setValues]);

    

    const handlerConfirmPass = (e) => {
      setConfirmPass(e.target.value);
    }

  
    const closeModal  =() =>{ //Cerrar el modal
      dispatch(cleanActive());
      dispatch(closeModalAction());
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
      const resp = validarUsuario(values, dispatch, (active) ? true : false, confirmPass);
      if(resp){
        setValidate(resp) 
        setTimeout(() => setValidate(false), 3000);
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
          <h1>Usuarios</h1>
          <hr/>
          <form className="form-custom" onSubmit={handlerSubmit}>
            <div className="inputsForm">
                <label>Nombre</label>
                <input type="text"  className="form-control"  name="nombre" value={values.nombre} onChange={handlerInputChange}/>
                
                <label>Apellidos</label>
                <input type="text"  className="form-control"  name="apellidos" value={values.apellidos} onChange={handlerInputChange}/>
                
                <label> Email </label>
                <input type="email"  className="form-control"  name="email" value={values.email} onChange={handlerInputChange}/>
                
                <label>Password</label>
                <input type="password"  className="form-control"  name="password" value={values.password} onChange={handlerInputChange}/>

                <label>Confirma Contraseña</label>
                <input type="password"  className="form-control"  name="confirmPass" value={confirmPass} onChange={handlerConfirmPass}/>

                <label>Telefono</label>
                <input type="text"  className="form-control"  name="telefono" value={values.telefono} onChange={handlerInputChange}/>
                
                <label> Numero de Control</label>
                <input type="text"  className="form-control"  name="numeroC" value={values.numeroC} onChange={handlerInputChange}/>

                <label> Carrera</label>
                <select
                          name="carrera"
                          type="carrera"
                          className="form-control selectCarrera"
                          onChange={handlerInputChange}
                        >
                           <option    select= "false" >Seleccione la carrera</option>
                           {carrers.map((carrera, i) => <option value={carrera} key={i}>{carrera}</option>)
                           }
                        </select>

                <label> Tipo de usuario </label>
                <select
                          id="selectCarrer"
                          name="type"
                          type="type"
                          className="form-control selectCarrera"
                          onChange={handlerInputChange}
                        >
                          {
                            active ? (
                              <>
                              <option    value={values.type} >{values.type}</option>
                              <option  value={values.type === 'USUARIO' ?  'ADMINISTRADOR' : 'USUARIO'}   >{values.type ===  'USUARIO' ?  'ADMINISTRADOR' : 'USUARIO'}</option>
                              </>
                            ) : 
                            (
                              <>
                                <option    select= "false" >Seleccione tipo de usuario</option>
                                <option    value='USUARIO' >USUARIO</option>
                                <option    value='ADMINISTRADOR' >ADMINISTRADOR</option>

                              </>
                            )
                          }

                        </select>
                
                
                <button type='submit' className="btn btn-outline-success mt-3 mb-3">{(active) ? "Editar" : "Agregar"}</button>
                                
            </div>
          </form>
          { validate &&   <div class="alert alert-danger validate" role="alert"> {validate}</div>}
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

export default ModalUsuario;