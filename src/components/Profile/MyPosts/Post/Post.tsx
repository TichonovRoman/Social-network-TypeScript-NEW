import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i001.fotocdn.net/s130/d16602d7ba16f827/user_xl/2932469603.jpg'/>
            {props.message}
            <div>Like: {props.likesCount}</div>
        </div>
    )
}

export default Post;