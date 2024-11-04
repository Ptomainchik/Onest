import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddPostForm, { AddPostFormValuesType } from "./AddPostForm/AddPostForm";
import { PostType } from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
    addLikes: (likes:number, id: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    let postsElements =
        [...props.posts]
            .map(p => <Post 
                    id={p.id}
                    addLikes={props.addLikes}
                    message={p.message}
                    likesCount={p.likesCount}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.mpost}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;