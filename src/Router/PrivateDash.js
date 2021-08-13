import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PrivateDash = ({
    isAuthenticated,
    type,
    component: Component,
    ...rest
}) => {

    //Mantener la ultima ruta donde estubo el usuario
    localStorage.setItem('lastPath', rest.location.pathname);
    console.log('AUTENTICACION',isAuthenticated);
    return (
        <Route {...rest}
            component = { (props) => (
                    (isAuthenticated) ?  (<Component  {...props}/> ): (<Redirect to="/login"/>)
            )}
        />
    )
}

PrivateDash.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


export default PrivateDash
