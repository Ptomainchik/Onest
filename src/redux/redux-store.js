import { createStore,combineReducers, applyMiddleware, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReduser"; 
import authReducer from "./authReduser";
import {thunk as thunkMiddleware} from "redux-thunk";
import { reducer as formReduser } from "redux-form";
import appReducer from "./appReduser";


let rootReducers = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReduser,
        auth: authReducer,
        form: formReduser,
        app: appReducer
});

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
window.store = store


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// window.__store__= store;


export default store;

