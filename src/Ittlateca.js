import React from 'react';
import {Provider} from 'react-redux';

import { store } from './Store/store';
import AppRouter from './Router/AppRouter';

import  './Styles/Styles.scss';

const Ittlateca = () => {
    return (
        <Provider store = {store}>
            <AppRouter/>
        </Provider>
    )
}

export default Ittlateca
