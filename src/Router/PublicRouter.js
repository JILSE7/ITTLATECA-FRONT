import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    
    console.log('aqui ando');
    console.log(isAuthenticated);
    const path = localStorage.getItem('lastPath') || '';
    return (
        <Route {...rest}
        component= {(props) =>(
            (isAuthenticated) ?  (<Redirect to={path.length> 0 ? path: '/'}/>) : (<Component {...props}/>)  
        )}
        />
    )

}

PublicRouter.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


export default PublicRouter;    
