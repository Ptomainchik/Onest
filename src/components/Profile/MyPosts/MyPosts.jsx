import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id:"1", message:"Hi, how are you?", likesCount: "13"},
    {id:"2", message:"It's my first post", likesCount: "32"}
   ]  

   let postsElements = posts
    .map (post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    
    return <div className={classes.mpost}>
    <div className={classes.mposts}>
        <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={classes.posts}>
     {postsElements}
    </div>
    </div>
     
}

export default MyPosts;
