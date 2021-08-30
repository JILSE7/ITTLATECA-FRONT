import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

//Icons
import {GiBookCover, GiOpenFolder} from'react-icons/gi'
import {GoTools} from 'react-icons/go';
import {FaRegHandPeace} from 'react-icons/fa';

import { Card } from 'antd';
import { fondoIcons } from '../../Helpers/admin';

const MainScreen = memo(() => {
    const {user} = useSelector(state => state.auth)
    
    //Navegacion
    const {push} = useHistory();
    const buscarLibro = () => push('/busquedas');
    const misPrestamos = () => push('/prestamos');
    const panelAdmin = () => push('/admin');

    const IconSize = useMemo(() => ({fontSize: '25px', marginLeft:"3px" }), []);


    const { Meta } = Card;

    return (
        <div className="container">
            <div className="saludo">
                <FaRegHandPeace/>
                <h1> Bienvenido a ITTLATECA </h1>
                <hr/>
                <h2>{user.nombre} {user.apellidos} </h2>
                <h2>Que haremos el dia de hoy?</h2>
            </div>

            <main className="menuBotones  animate__animated animate__backInRight" style={{width: ( user.type === 'ADMINISTRADOR' ) ? '80%': '55%'}}>
                
              {/*   <button onClick={misPrestamos} className={fondoIcons("warning")}>Mis prestamos <GiOpenFolder style={IconSize}/></button>
               {user.type === 'ADMINISTRADOR' && <button onClick={panelAdmin} className={fondoIcons("info")}>Administradores  <GoTools style={IconSize}/></button>} */}

               <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border: '1px solid green'}}
                                cover={<img alt="example" src="https://cnnespanol.cnn.com/wp-content/uploads/2021/07/libros-amazon-1.png" />}
                                className="cards"
                    >
                            <Meta title= 'Busca un libro' description={<button onClick={buscarLibro} style={{fontSize:'14px'}} className={fondoIcons("success")}>Buscar <GiBookCover style={IconSize}/></button>}/>
                </Card>

                <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border: '1px solid #ffc107'}}
                                cover={<img alt="example" src="https://www.laguiago.com/wp-content/uploads/2020/06/Bilbiotecas-de-Murcia.jpg" />}
                                className="cards"
                    >
                            <Meta title= 'Administra tus prestamos'  description={  <button onClick={misPrestamos} className={fondoIcons("warning")} style={{fontSize:'14px'}}>Mis prestamos <GiOpenFolder style={IconSize}/></button>}/>
                </Card>


            { user.type === 'ADMINISTRADOR' &&  <Card
                        hoverable
                                style={{ width: 200, textAlign:'center', border:'1px solid #0dcaf0'}}
                                cover={<img alt="example" src="https://images.squarespace-cdn.com/content/v1/53aadf1de4b0a0a817640cca/1601327247533-YXR8YXYJ7EDBXJSNOHU6/Bibliotecaria.jpg" />}
                                className="cards"
                    >
                            <Meta  title= 'Gestiona' description={  <button onClick={panelAdmin} className={fondoIcons("info")}  style={{fontSize:'14px'}}>Administración <GoTools style={IconSize}/></button>}/>
                </Card>}
            </main>

            <span>Seccion de avisos</span>
            <div className="avisos">
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
                <p>In id exercitation aliquip eiusmod sunt labore laborum eiusmod aute. Adipisicing in Lorem est nulla proident. Cillum officia aute consectetur voluptate commodo ipsum consectetur.</p>
            </div>
        </div>
    )
})

export default MainScreen
