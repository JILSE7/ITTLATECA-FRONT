import { Route, Switch } from "react-router-dom";
import LibroScreen from "../Screens/Admin/LibroScreen";
import PrestamoScreen from "../Screens/Admin/PrestamoScreen";
import UsuarioScreen from "../Screens/Admin/UsuarioScreen";


export const AdminRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin/usuario" component ={UsuarioScreen} />
                <Route exact path="/admin/prestamo" component={PrestamoScreen}/>
                <Route exact path="/admin/libro" component={LibroScreen}/>
            </Switch>
        </div>
    )
};