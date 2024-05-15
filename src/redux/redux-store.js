import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import musicReducer from "./musicReducer";



let store = configureStore({
    reducer:{
        dialogsPage:dialogsReducer,
        profilePage:profileReducer,
        friendsPage:friendsReducer,
        musicPage:musicReducer
    }
})

export default store;

window.store = store