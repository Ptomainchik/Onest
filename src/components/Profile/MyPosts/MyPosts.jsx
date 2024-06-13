import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";

const MyPosts = (props) => {
  
   let postsElements = 
   props.posts.map (post => <Post  message={post.message} likesCount={post.likesCount}/>)
 
   let onAddPost = (values) => {
    props.addPost(values.newPostText);
   }

    return <div className={classes.mpost}>
        <h3>My posts</h3>
        <AddNewPostForm onSubmit={onAddPost}/>
    <div className={classes.posts}>
     {postsElements}
    </div>
    </div> 
    
     
}

const maxLength20 = maxLengthCreator(20);

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
  <div>
    <Field component={Textarea} name="newPostText" placeholder="Post message" validate={[required, maxLength20]}/>
  </div>
  <div>
    <button>Add post</button>
  </div>
</form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

export default MyPosts;

