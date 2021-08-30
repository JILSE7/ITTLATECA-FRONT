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
    
    


    
    
    useEffect(async() => {
        setCheckin(true)
        const hola = await dispatch(startChecking(setCheckin));
        setCheckin(hola)
    }, [dispatch])
    
    
    
    if(checkin){
        return (
                <div className="Wait">
                    <img src="https://pbs.twimg.com/profile_images/468146735047389184/HUX8h7U8.jpeg" alt="OrgulloLagarto"/>
                </div>
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
