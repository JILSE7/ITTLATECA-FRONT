import React from 'react'
import { useHistory } from 'react-router';
import CardBook from '../../Components/Busqueda/CardBook';

const PrestamosUserScreen = ({prestamos = []}) => {

         const history = useHistory();

    return (
        <div className="container">
            <div className="_busquedas-result">
                <div className="_busqueda-card-padre">
                    {
                        (prestamos.length > 0) ? 
                                                  (prestamos.map((prestamo, i) => 
                                                                                        (<CardBook 
                                                                                            libro={prestamo.libro} 
                                                                                            history={history} 
                                                                                            isDevolution={true} 
                                                                                            key={i+"book"}
                                                                                             wasReturned={{
                                                                                                 status: prestamo.devolucion, 
                                                                                                 fechaR:prestamo.fechaRetiro, 
                                                                                                 fechaD: prestamo.fechaDevolucion }
                                                                                                }/>
                                                                                                 )
                                                                                        )
                                                )    : (
                                                    <h2>No has realizado ningun prestamo</h2>
                                                )
                    }
                </div>
            </div>
        </div>
    )
}

export default PrestamosUserScreen
