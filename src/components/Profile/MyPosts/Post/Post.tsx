import React from "react";
import classes from "./Post.module.css"

type PropsType = {
    id: string
    message: string
    likesCount: number
    addLikes: (likes: number, id: string) => void
}

const Post: React.FC<PropsType> = (props) => {
    const addLikesHandler = () => {
        const likes = props.likesCount + 1
        props.addLikes(likes, props.id)
    }
    return <div className={classes.post}>
    <img alt="Ptichka" src="https://avatars.mds.yandex.net/i?id=91710a3b3b7b335a2c6d4d0c7010d1ff6146ea31-12569941-images-thumbs&n=13"/>
    { props.message }
    <div>
    <span>Like</span> 
    <button onClick={addLikesHandler}>+</button> {props.likesCount}
    </div>
    </div>
}

export default Post;
