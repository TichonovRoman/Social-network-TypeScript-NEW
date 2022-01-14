import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

let postsData: Array<PostsDataType> = [
    {id: 1, message: "Hi, how are yuo?", likesCount: 15},
    {id: 2, message: "It`s my first post", likesCount: 20},
]

let {id, message} = postsData[0] //декструрирующее присваивание


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
                <Post message={message} likesCount={id}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
        ;
};

export default MyPosts;