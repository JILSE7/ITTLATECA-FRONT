import { authReducer } from '../Reducers/authReducer';

import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;





//CombineReducers
const reducer = combineReducers({
    auth:  authReducer
})

export const store = createStore(reducer, 
    composeEnhancers(
        applyMiddleware(thunk))
    )