import React from 'react'

const LoginScreen = () => {
    return (
        <div className="containerLogin">
            <div className="logoIttla">
                <img src="https://lh3.googleusercontent.com/proxy/0HomV87Sz8WzpbfrislP64Eix2Sx-lzQh9BQJK6vnWbWazgK2r-9hPwCeP0TUdQkUIbBsobFSXLf3m7QGLrubMM41nxf0Cu1X-Lb" alt="logoItics"/>
            </div>
            <br/>
            <h2>Inicia Sesion</h2>
            <div>
            <form className="iniciarSecion">
                        <div className="mb-3">
                        <label  className="form-label">Numero de Control</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <p  className="form-text">No compartas tu cuenta evita los malos usos de tu cuenta.</p>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn ">Iniciar</button>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen
