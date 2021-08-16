import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LibroScreen from "../Screens/Admin/LibroScreen";
import PrestamoScreen from "../Screens/Admin/PrestamoScreen";
import UsuarioScreen from "../Screens/Admin/UsuarioScreen";
import BookScreen from "../Screens/AllUsers/BookScreen";
import BusquedaScreen from "../Screens/AllUsers/Busqueda/BusquedaScreen";

import MainScreen from '../Screens/AllUsers/MainScreen';
import PerfilScreen from "../Screens/AllUsers/PerfilScreen";

export const DashBoardRoutes = () => {
    const {user:type} = useSelector(state => state.auth);
    

    return (
        <div>
            <Switch>
                <Route exact path="/" component ={MainScreen} />
                <Route exact path="/perfil" component={PerfilScreen}/>
                <Route exact path="/busquedas" component={BusquedaScreen}/>
                <Route exact path="/libro/:id" component={BookScreen}/>
                <Route exact path="/admin/usuario"><UsuarioScreen/></Route>
                <Route exact path="/admin/prestamo" ><PrestamoScreen/></Route>
                <Route exact path="/admin/libro" ><LibroScreen type={type}/></Route>
            </Switch>
        </div>
    )
};