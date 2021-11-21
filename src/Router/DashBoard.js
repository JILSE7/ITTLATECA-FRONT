import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AdminScreen from "../Screens/Admin/AdminScreen";
import LibroScreen from "../Screens/Admin/LibroScreen";
import PrestamoScreen from "../Screens/Admin/PrestamoScreen";
import UsuarioScreen from "../Screens/Admin/UsuarioScreen";
import BookScreen from "../Screens/AllUsers/BookScreen";
import BusquedaScreen from "../Screens/AllUsers/Busqueda/BusquedaScreen";

import MainScreen from '../Screens/AllUsers/MainScreen';
import PerfilScreen from "../Screens/AllUsers/PerfilScreen";
import PrestamosUserScreen from "../Screens/AllUsers/PrestamosUserScreen";

export const DashBoardRoutes = () => {
    const {user} = useSelector(state => state.auth);
    
    console.log(user);
    

    return (
        <div>
            <Switch>
                <Route exact path="/" component ={MainScreen} />
                <Route exact path="/perfil" component={PerfilScreen}/>
                <Route exact path="/busquedas" component={BusquedaScreen}/>
                <Route exact path="/libro/:id" component={BookScreen}/>
                <Route exact path="/prestamos" ><PrestamosUserScreen prestamos={user.prestamos}/></Route>
                <Route exact path="/admin"><AdminScreen user={user}/></Route>
                <Route exact path="/admin/usuarios"><UsuarioScreen user={user}/></Route>
                <Route exact path="/admin/prestamos" ><PrestamoScreen user={user}/></Route>
                <Route exact path="/admin/libros" ><LibroScreen user={user}/></Route>
            </Switch>
        </div>
    )
};