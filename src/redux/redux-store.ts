import { createStore,combineReducers, applyMiddleware, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReduser"; 
import authReducer from "./authReduser";
import {thunk as thunkMiddleware} from "redux-thunk";
import { reducer as formReduser } from "redux-form";
import appReducer from "./appReduser";


let rootReducer = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReduser,
        auth: authReducer,
        form: formReduser,
        app: appReducer
});

type RootReduserType = typeof rootReducer;

export type AppStateType = ReturnType<RootReduserType>

type PropetiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropetiesTypes<T>>

// @ts-ignore
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// window.__store__= store;


export default store;

