import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsDataType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements =  props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{ postsElements }</div>
        </div>
    )
        ;
};

export default MyPosts;