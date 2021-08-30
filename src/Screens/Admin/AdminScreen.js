import React, { useEffect, useMemo } from 'react'
import { FaHandshake, FaUsersCog } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import useType from '../../Hooks/useType';

import { Card } from 'antd';
import { GoTools } from 'react-icons/go';
import CalendarPrestamos from '../../Components/Calendar/CalendarPrestamos';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPrestamos } from '../../Actions/prestamos';


const AdminScreen = ({user}) => {
    //Veificacion de administrador
    useType(user.type);

    const history = useHistory();

    const goAdmin = (path)  => history.push(`/admin/${path}`)
    
    const { Meta } = Card;

    const dispatch = useDispatch();

    const {prestamos} = useSelector(state => state)
    

    useEffect(() => {
        if(!prestamos.ok && prestamos.total === null){
           dispatch(startGetPrestamos());
        }
    }, [ prestamos,dispatch]);

    

    return (
        <div className="container">
                <h1>Administrador</h1>
                <h2 className="nameUser"> <GoTools /> {user.nombre} {user.apellidos}</h2>
                <h3 className="mt-4">¿Que vamos a Gestionar?</h3>
            <div className="_admin-body">
                <div className="menuBotonesAdmin">
                <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border: '1px solid #1b396a'}}
                                cover={<img alt="example" src="https://igjh.org/wp-content/uploads/2020/09/BIBLIO.jpg" />}
                                className="cards"
                    >
                            <Meta title= 'Usuarios' description={ 
                       <div className="icon">
                            <FaUsersCog className="icono-admin user" onClick={() => goAdmin('usuarios')}/>
                                
                        </div>}/>
                </Card>

                <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border: '1px solid #25760a'}}
                                cover={<img alt="example" src="https://wiggot.com/wp-content/uploads/2020/11/libros-sobre-sector-inmobiliario.jpg" />}
                                className="cards"
                    >
                            <Meta title= 'Libros' description={ 
                           <div  className="icon">
                                <ImBooks className="icono-admin books"  onClick={() => goAdmin('libros')}/>
                            </div>}/>
                </Card>

                <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border: '1px solid rgb(242, 97, 0)'}}
                                cover={<img alt="example" src="https://igjh.org/wp-content/uploads/2020/09/BIBLIO.jpg" />}
                                className="cards"
                    >
                            <Meta title= 'Prestamos' description={ 
                            <div   className="icon">
                                    <FaHandshake className="icono-admin prestamo" onClick={() => goAdmin('prestamos')}/>
                                        
                            </div>}/>
                </Card>                
                </div>
                
                <p className="text-center">Todos los cambios realizados seran guardados en la base de datos, asegurese que lo que esta haciendo sea correcto</p>
            </div>
            <h3 className="mt-4">Calendario</h3>
            <CalendarPrestamos prestamos={prestamos.prestamos}/>
        </div>
    )
}

export default AdminScreen
