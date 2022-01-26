import React, {Component, LegacyRef, MutableRefObject, useRef} from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    addPost: (postMessage:string) => void

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: any  = useRef()

    let addPost = () => {
            let text = newPostElement.current.value;
            props.addPost(text)
    }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                        {/*// вынести баттон в отдельный компонент и папку и передать нейм и колбэк//*/}
                    </div>
                </div>
                <div className={s.posts}>{postsElements}</div>
            </div>
        )
            ;
    };

    export default MyPosts;