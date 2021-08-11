import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import LoginScreen from '../Screens/LoginScreen';
import MainScreen from '../Screens/MainScreen';
import RegisterScreen from '../Screens/RegisterScreen';

//Pantallas

const AppRouter = () => {
    return (
        <Router>
                <Layout>
            <div>
                <Switch>
                    <Route exact path="/login" component ={LoginScreen} />
                    <Route exact path="/register" component ={RegisterScreen} />
                    <Route exact path="/" component ={MainScreen} />
                </Switch>
            </div>
                </Layout>
        </Router>
    )
}

export default AppRouter
