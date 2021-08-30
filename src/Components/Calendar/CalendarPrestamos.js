import React from 'react';

import { Calendar, Badge } from 'antd';
import { useSelector } from 'react-redux';

function getListData(value, prestamos) {
    //console.log(value);
    //console.log(value.format('ll'));
    //console.log(prestamos); 

    let listData = [];
    prestamos.forEach(prestamo => {
            if(prestamo.fechaDevolucion == value.format('ll')){
                listData= [...listData, {libro: prestamo.libro.nombre, status: prestamo.devolucion, id: prestamos.idPrestamo}]
                console.log('me tendria que pintar en el calendar');
            }
    });
    
    
    return listData;
}

function getMonthData(value) {
    if (value.month() === 7) {
        return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}



const CalendarPrestamos = ({prestamos}) => {
    
    
    
    function dateCellRender(value) {
        
      const listData = getListData(value, prestamos);
      
      return (
       <>
       <p className="text-center">{(listData.length>0) ? listData.length: null }</p>
         <ul className="events">
          {listData.map(item => {
              console.log(item);
              return <li key={item.id}>
                <Badge status={(item.status) ? 'success': 'error'} text={item.libro} />
              </li>
            })}
            </ul>
       </>
      );
    }
    return (
        
        
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        )
    }
    
    export default CalendarPrestamos
    
    
    
    /* let listData;
    switch (value.format('ll')) {
        case 'Aug 1, 2021':
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData ||  []; */