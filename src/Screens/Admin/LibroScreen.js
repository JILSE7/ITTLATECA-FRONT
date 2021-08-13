import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { noAutorizado } from '../../Helpers/noAutorizado';


const LibroScreen = ({type}) => {
        const history = useHistory();
    useEffect(() => {
        if(type){
            if(type !== "ADMINISTRADOR"){
                history.replace('/');
                noAutorizado();
            }
        }
    }, [ type, history])

    if(!type){
        return (
            <p>checando</p>
        )
    }

    return (
        <div>
            <p>soy un libro</p>
        </div>
    )
}

export default LibroScreen
