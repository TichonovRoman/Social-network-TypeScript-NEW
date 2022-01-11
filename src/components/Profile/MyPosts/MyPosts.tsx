import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts: React.FC = () => {
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
            <div className={s.posts}>
                <Post message = "Hi, how are yuo?" likesCount = {15}/>
                <Post message = "It`s my first post" likesCount = {20}/>
            </div>
        </div>
    )
        ;
};

export default MyPosts;