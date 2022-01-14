import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

let posts: Array<PostsDataType> = [
    {id: 1, message: "Hi, how are yuo?", likesCount: 15},
    {id: 2, message: "It`s my first post", likesCount: 20},
    {id: 3, message: "Hi", likesCount: 56},
    {id: 4, message: "Cool", likesCount: 2},
]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

// let {id, message} = postsData[0] //декструрирующее присваивание


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
                {postsElements}
            </div>
        </div>
    )
        ;
};

export default MyPosts;