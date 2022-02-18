import React, {Component, LegacyRef, MutableRefObject, useRef} from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostsDataType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from '../../../StoreContext';

// type MyPostsPropsType = {
//     posts: Array<PostsDataType>
//     dispatch: (action: ActionsTypes) => void
//     newPostText: string
//
// }


const MyPostsContainer: React.FC = (props) => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    let action = addPostActionCreator()
                    store.dispatch(action);
                }

                let onPostChange = (text: any) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return (
                    <MyPosts onPostChange={onPostChange}
                             newPostText={store.getState().profilePage.newPostText}
                             addPost={addPost}
                             posts={store.getState().profilePage.posts}

                    />
                )


            }


        }


        </StoreContext.Consumer>

    )

};

export default MyPostsContainer;