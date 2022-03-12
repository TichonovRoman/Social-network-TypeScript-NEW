import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-devushek-vatsap-7.jpg'/>
            {props.message}
            <div>Like: {props.likesCount}</div>
        </div>
    )
}

export default Post;