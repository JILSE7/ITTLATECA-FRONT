import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bookReducer } from "./booksReducer";

export const rootReducers = combineReducers({
    auth:  authReducer,
    books: bookReducer

})