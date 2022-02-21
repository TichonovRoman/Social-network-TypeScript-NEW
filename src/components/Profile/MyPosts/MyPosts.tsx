import React, {Component, LegacyRef, MutableRefObject, useRef} from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {PostsPropsType} from "./MyPostsContainer";

// type MyPostsPropsType = {
//     posts: Array<PostsDataType>
//     // dispatch: (action: ActionsTypes) => void
//     // newPostText: string
//     onPostChange: (text: string) => void
//      newPostText: string
//     addPost: () => void
//
//
// }

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement: any = React.createRef<HTMLTextAreaElement>()
    let text = newPostElement.current?.value;

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={()=>props.onPostChange(text)}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                    {/*// вынести баттон в отдельный компонент и папку и передать нейм и колбэк//*/}
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
        ;
};

export default MyPosts;