import React from 'react'
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';
import { GiToolbox } from 'react-icons/gi';
import { ImBook, ImDatabase } from 'react-icons/im';
import {MdEmail, MdPhoneIphone, MdSchool  } from 'react-icons/md';
import { useSelector } from 'react-redux'

const PerfilScreen = () => {
    const {user} = useSelector(state => state.auth)
    console.log(user);
    return (
        <div className="container container-center">
            <h2>Perfil</h2>
            <hr/>
            <div className="_perfilScreen-body">
                <h2 className="mb-3"><FaUserAstronaut />  {user.nombre} {user.apellidos}</h2>
                

            <table className="table table-custom-user">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">  <AiOutlineFieldNumber />  </th>
                                    <td>{user.numeroC}</td>
                                </tr>
                                <tr>
                                    <th scope="row">  <MdEmail />  </th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">  <MdPhoneIphone/>  </th>
                                    <td>{user.telefono}</td>
                                </tr>
                                <tr>
                                    <th scope="row">  <MdSchool />  </th>
                                    <td>{user.carrera}</td>
                                </tr>   
                                <tr>
                                    <th scope="row">  <GiToolbox />  </th>
                                    <td>{user.type}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><ImBook /></th>
                                    <td colspan="2">{(user.prestamos.length > 0) ? user.prestamos.length : "No has realizado ningun prestamo"}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><ImDatabase /></th>
                                    <td colspan="2">{user.uid}</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </div>
    )
}

export default PerfilScreen
