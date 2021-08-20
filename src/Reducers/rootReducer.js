import { combineReducers } from "redux";
import { activeReducer } from "./activeReducer";
import { authReducer } from "./authReducer";
import { bookReducer } from "./booksReducer";
import { prestamosReducer } from "./prestamosReducer";
import { uiReducer } from "./uiReducer";
import {usersReducer} from "./usersReducer";

export const rootReducers = combineReducers({
    auth:  authReducer,
    books: bookReducer,
    users: usersReducer,
    prestamos: prestamosReducer,
    ui: uiReducer,
    active: activeReducer
})