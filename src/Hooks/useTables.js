import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";


export const useTables = (array, startGet, extraccion) => {

    const dispatch = useDispatch();
    const [state, setstate] = useState([]);

    useEffect(() => {
        if(!array.total){
            dispatch(startGet());
        }else{
            if(extraccion === 'usuarios'){
                setstate([...array.users]);
            }else if(extraccion === 'libros'){
                setstate([...array.libros]);
            }else if(extraccion === 'prestamos'){
                setstate([...array.prestamos]);
            }
        }
    }, [array, extraccion]);


    return [state, setstate];

}