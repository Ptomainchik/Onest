import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/state"

const MyPosts = (probs) => {
  
   let postsElements = 
   probs.posts.map (post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
   
   let newPostElement = React.createRef();

   let addPost = () => {
    probs.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    probs.dispatch(action);
  }

    return <div className={classes.mpost}>
    <div className={classes.mposts}>
        <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={probs.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
    <div className={classes.posts}>
     {postsElements}
    </div>
    </div>
     
}

export default MyPosts;
