import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { startChecking } from '../Actions/auth';
import Layout from '../Components/Layout/Layout';
import LoginScreen from '../Screens/Logs/LoginScreen';

import RegisterScreen from '../Screens/Logs/RegisterScreen';

import { DashBoardRoutes } from './DashBoard';

import PrivateDash from './PrivateDash';
import PublicRouter from './PublicRouter';

//Pantallas

const AppRouter = () => {
    const [checkin, setCheckin] = useState(false);
    const dispatch = useDispatch();
    const {login} = useSelector(state => state.auth);
    
    


    
    
    useEffect(() => {
        setCheckin(true)
        dispatch(startChecking());
        setTimeout(() => {
            setCheckin(false)
        }, 800);
    }, [dispatch])
    
    
    
    if(checkin){
        return (
                <p>hola</p>
        );
    }
    
    return (
        <Router basename={process.env.PUBLIC_URL}>
                <Layout>
                    <div>
                        <Switch>
                            <PublicRouter exact path="/login" isAuthenticated={login} component ={LoginScreen} />
                            <PublicRouter exact path="/register"  isAuthenticated={login}  component ={RegisterScreen} />
                            <PrivateDash path="/" isAuthenticated={login} component={DashBoardRoutes} />
                        </Switch>
                    </div>
                </Layout>
        </Router>
    )
}

export default AppRouter
