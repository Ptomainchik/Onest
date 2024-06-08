import { createStore,combineReducers, applyMiddleware, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReduser"; 
import authReducer from "./authReduser";
import {thunk as thunkMiddleware} from "redux-thunk";


let rootReducers = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReduser,
        auth: authReducer
});

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;

