import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import musicReducer from "./musicReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage:{
         posts: [
            {id: 1, message:"Hi, how are you?", likesCount: "13"},
            {id: 2, message:"It's my first post", likesCount: "32"}],
         newPostText:""   
        },
    
        dialogsPage:{
         dialogs: [
            {id: 1, name:"Dmitry"},
            {id: 2, name:"Alexey"},
            {id: 3, name:"Alexander"},
            {id: 4, name:"Viktoria"},
            {id: 5, name:"Zinaida"}],
         messages: [
            {id: 1, message:"Hi"},
            {id: 2, message:"Privet"},
            {id: 3, message:"Hello"},
            {id: 4, message:"Zdraste"},
            {id: 5, message:"Yo"}
        ],
         newMessageBody: ""
        },
    
        friendsPage:{
            friendsNames:[
                {id: 1, name: "Alexaner"},
                {id: 2, name: "Dmitry"},
                {id: 3, name: "Viktoria" }
            ],
            friendsAges: [
                {id: 1, age:"34 goda" },
                {id: 2, age:"28 let"},
                {id: 3, age:"37 let"}
            ]
    
        },
    
        musicPage:{
            stylesMusics: [
                {id: 1, stylemusic: "Rock"},
                {id: 2, stylemusic: "Jazz"},
                {id: 3, stylemusic: "Rap"},
                {id: 4, stylemusic: "HeavyMetall"},
                {id: 5, stylemusic: "Classic"},
            ],
            sings: [
                {id: 1, quantity: "435 sings" },
                {id: 2, quantity: "241 sings" },
                {id: 3, quantity: "23 sings" },
                {id: 4, quantity: "507 sings" },
                {id: 5, quantity: "170 sings" },
            ]
        }
},
_callSubscriber() {
    console.log('state changed');
},
getState (){
    return this._state
},
subscribe (observer) {
    this._callSubscriber = observer;
  },
dispatch(action){
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
   this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._state.musicPage = musicReducer(this._state.musicPage, action);
   this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._callSubscriber(this._state);
  }
}





window.store = store;







export default store; 