import { createStore,combineReducers, } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";




let rootReducers = combineReducers({
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
});

let store = createStore(rootReducers);

window.store = store

export default store;

