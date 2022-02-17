import React, {Component, LegacyRef, MutableRefObject, useRef} from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostsDataType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string

}


const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {


    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    let onPostChange = (text: any) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <MyPosts onPostChange={onPostChange}
                 newPostText={props.newPostText}
                 addPost={addPost}
                 posts={props.posts}

        />
    )
        ;
};

export default MyPostsContainer;