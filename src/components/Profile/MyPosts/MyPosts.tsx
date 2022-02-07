import React, {Component, LegacyRef, MutableRefObject, useRef} from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch({type: `ADD-POST`});
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch({type: `UPDATE-NEW-POST-TEXT`, newText: text})
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
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