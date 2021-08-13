import React from 'react'
import { useDispatch, } from 'react-redux';
import { startLogin } from '../../Actions/auth';
import { useForm } from '../../Hooks/useForm'

//LogoItics
import logo from '../../Assets/itics.png';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {
    //Redux
    const {replace} = useHistory();
   
    const dispatch = useDispatch();
    //CustomHook
    const [values, handleInputChange] = useForm({numeroC: '', password: ''});
    const {numeroC, password} = values;


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(values));
        replace('/')
    }


    return (
        <div className="containerLogin">
            <div className="logoIttla">
                <img src={logo} alt="logoItics"/>
            </div>
            <br/>
            <h2>Inicia Sesion</h2>
            <div>
            <form className="iniciarSecion" onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label  className="form-label">Numero de Control</label>
                            <input type="text" className="form-control" id="numeroC" name={"numeroC"} onChange={handleInputChange}  value={numeroC}/>
                        </div>
                        <p  className="form-text">No compartas tu cuenta evita los malos usos de tu cuenta.</p>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name={"password"} onChange={handleInputChange} value={password} />
                        </div>
                        <button type="submit" className="btn ">Iniciar</button>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen
