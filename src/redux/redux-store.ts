import { createStore,combineReducers, applyMiddleware, Action, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer"; 
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";
import chatReducer from "./chatReducer";


let rootReducer = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        chat: chatReducer
});

type RootReduserType = typeof rootReducer;
export type AppStateType = ReturnType<RootReduserType>

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U: never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A> 


// @ts-ignore
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// window.__store__= store;


export default store;

