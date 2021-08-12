import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { startChecking } from '../Actions/auth';
import Layout from '../Components/Layout/Layout';
import LoginScreen from '../Screens/LoginScreen';
import MainScreen from '../Screens/MainScreen';
import RegisterScreen from '../Screens/RegisterScreen';

//Pantallas

const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startChecking());
    }, [])

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
