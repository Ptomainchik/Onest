import React from "react";
import classes from "./Post.module.css"

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return <div className={classes.post}>
    <img alt="Ptichka" src="https://avatars.mds.yandex.net/i?id=91710a3b3b7b335a2c6d4d0c7010d1ff6146ea31-12569941-images-thumbs&n=13"/>
    { props.message }
    <div>
    <span>Like</span>  {props.likesCount}
    </div>
    </div>
}

export default Post;
