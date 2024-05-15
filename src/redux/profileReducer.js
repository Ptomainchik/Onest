const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message:"Hi, how are you?", likesCount: "13"},
        {id: 2, message:"It's my first post", likesCount: "32"}],
     newPostText:""   
    }

    const profileReducer = (state = initialState, action) => {
      switch (action.type) {

        case ADD_POST:
          let rand = Math.floor(Math.random() * 300); // Random № of likes 
    
          let newPost = {
            like: rand,
            message: state.newPostText,
            name: "Mops",
          };
          return {
            ...state, // оператор расширения для создания копий объекта
            posts: [...state.posts, newPost],
            newPostText: "",
          };
        case UPDATE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText: action.text
          };
        default:
          return state;
      }}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, text})

export default profileReducer;