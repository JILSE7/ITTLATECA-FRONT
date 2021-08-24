import { Input, AutoComplete } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
const { Option } = AutoComplete;

const CompleteLibro = ({books, obj}) => {
    const [result, setResult] = useState([]);

    const handleSearch = (value) => {

             //Capitalizando la busqueda para los nombres
       let searchCapi = '';
       if(value) searchCapi =  value[0].toUpperCase() +  value.slice(1);

    //Haciendo los filttros
 
      let res = [];
  
      if(value.length ===0){
          setResult([]);    
      }else{
          res = books.filter(libro => libro.nombre.includes(value) || libro.nombre.includes(value.toUpperCase()) || libro.nombre.includes(searchCapi) );
      }
      
      console.log(res);
      setResult(res);
    };
  
    const handlerSelect = (e) => {
      console.log(e);
      obj.libro = e;
    }
  
    const keyDown = (e) => {
          if(e.keyCode === 8){
              document.querySelector('#libro').value = ' ';
              obj.libro = '';
          }
    }
    return (
        <AutoComplete
        style={{
          width: '100%',
          height: 39,
          textAlign: 'center',
          justifyContent:'center',
          
        }}
        onSearch={handleSearch}
        placeholder="Busca por nombre del libro"
        onSelect={handlerSelect}
        className="form-control"
        onKeyDown = {keyDown}
        id='libro'
        
      >
          {result.map((book) => (
          <Option  key={book.idLibro} value={book.idLibro} style={{textAlign:'center'}}>
            {book.nombre + ' '+ book.autor }
          </Option>
        ))}
      </AutoComplete>
    
    )
}

export default CompleteLibro
