const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
let store = {
    _state: {
        profilePage:{
         posts: [
            {id:"1", message:"Hi, how are you?", likesCount: "13"},
            {id:"2", message:"It's my first post", likesCount: "32"}],
         newPostText:""   
        },
    
        dialogsPage:{
         dialogs: [
            {id:"1", name:"Dmitry"},
            {id:"2", name:"Alexey"},
            {id:"3", name:"Alexander"},
            {id:"4", name:"Viktoria"},
            {id:"5", name:"Zinaida"}],
         messages: [
            {id:"1", message:"Hi"},
            {id:"2", message:"Privet"},
            {id:"3", message:"Hello"},
            {id:"4", message:"Zdraste"},
            {id:"5", message:"Yo"}]  
          
      },
    
        sidebar:{
            friends:[
                {id: "1", name: "Alexaner"},
                {id: "2", name: "Dmitry"},
                {id: "3", name: "Viktoria" }
            ],
            age: [
                {id: "1", age:"34 goda" },
                {id: "2", age:"28 let"},
                {id: "3", age:"37 let"}
            ]
    
        },
    
        music:{
            stylymus: [
                {id: "1", stylesmusic: "Rock"},
                {id: "2", stylesmusic: "Jazz"},
                {id: "3", stylesmusic: "Rap"},
                {id: "4", stylesmusic: "HeavyMetall"},
                {id: "5", stylesmusic: "Classic"},
            ],
            sings: [
                {id:"1", quantity: "435 sings" },
                {id:"2", quantity: "241 sings" },
                {id:"3", quantity: "23 sings" },
                {id:"4", quantity: "507 sings" },
                {id:"5", quantity: "170 sings" },
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
if (action.type === "ADD-POST"){
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
} else if (action.type === "UPDATE-NEW-POST-TEXT"){
    this._state.profilePage.newPostText= action.newText;
    this._callSubscriber(this._state);
}
}}

export const addPostActionCreator = () => ({ type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT , newText: text})

window.store = store;







export default store; 