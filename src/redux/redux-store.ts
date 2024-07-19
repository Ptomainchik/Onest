import { createStore,combineReducers, applyMiddleware, Action, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReduser"; 
import authReducer from "./authReduser";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReduser } from "redux-form";
import appReducer from "./appReduser";
import chatReduser from "./chatReduser";


let rootReducer = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReduser,
        auth: authReducer,
        form: formReduser,
        app: appReducer,
        chat: chatReduser
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

