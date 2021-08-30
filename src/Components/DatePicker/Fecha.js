import React, { useState } from 'react'
import { DatePicker, Space } from 'antd';


import dayjs from 'dayjs';
import es from 'dayjs/locale/es';
dayjs.locale(es);


const Fecha = ({values, retiro= true, edit = false}) => {
    
    console.log(edit);
    function onChange(date, dateString) {
        console.log(date.format('ll'));
/*         const dateParse = dayjs(dateString).format('DD MMMM YYYY').split(' ');
        const dateChida = dateParse[0] + " de " + dateParse[1] + " del " + dateParse[2]; */
        
        if(date){
            (retiro) ?  values.fechaRetiro = date.format('ll') : values.fechaDevolucion = date.format('ll');
        }else{
            (retiro) ?  values.fechaRetiro = '' : values.fechaDevolucion = '';
        }
    }



    return (
       <Space direction="vertical" >
                 <DatePicker  onChange={onChange} placeholder={(edit) ? (retiro) ? values.fechaRetiro  : values.fechaDevolucion :"Seleccione una fecha"} />
       </Space>
    )
}
    
export default Fecha
