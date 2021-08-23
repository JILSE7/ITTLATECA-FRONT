import { Input, AutoComplete } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
const { Option } = AutoComplete;

const CompleteUser = ({users, obj}) => {

    const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if(value.length ===0){
        setResult([]);    
    }else{
        res = users.filter((user) => user.numeroC.includes(value));
    }
    
    
    
    setResult(res);
  };

  const handlerSelect = (e) => {
    console.log(e);
    obj.usuario = e;
  }

  const keyDown = (e) => {
        if(e.keyCode === 8){
            document.querySelector('#uid').value = ' ';
            obj.usuario = '';
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
      placeholder="Busca por numero de control"
      onSelect={handlerSelect}
      className="form-control"
      onKeyDown = {keyDown}
      id='uid'
      
    >
        {result.map((user) => (
        <Option  key={user.uid} value={user.uid} style={{textAlign:'center'}}>
          {user.nombre + ' '+ user.apellidos + " " + user.carrera}
        </Option>
      ))}
    </AutoComplete>
  );
}

export default CompleteUser
