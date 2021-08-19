import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { noAutorizado } from "../Helpers/noAutorizado";


const useType = (type) => {
    
    const history = useHistory();
    useEffect(() => {
        if(type){
            if(type !== "ADMINISTRADOR"){
                history.replace('/');
                noAutorizado();
            }
        }
    }, [ type, history])

    return (<p>hola</p>)
}

export default useType
