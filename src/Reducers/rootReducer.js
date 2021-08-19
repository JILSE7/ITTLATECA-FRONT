import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bookReducer } from "./booksReducer";
import { prestamosReducer } from "./prestamosReducer";
import {usersReducer} from "./usersReducer";

export const rootReducers = combineReducers({
    auth:  authReducer,
    books: bookReducer,
    users: usersReducer,
    prestamos: prestamosReducer
})