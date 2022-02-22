import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";

export const ADD_POST = `ADD-POST`
export const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
export type ProfilePageType = {
    posts: Array<PostsDataType>,
    newPostText: string

}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are yuo?", likesCount: 15},
        {id: 2, message: "It`s my first post", likesCount: 20},
        {id: 3, message: "Hi", likesCount: 56},
        {id: 4, message: "Cool", likesCount: 20},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }
            const newState = {...state, posts: [...state.posts, newPost], newPostText: ""}
            return newState;

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        default:
            return state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const

export default profileReducer;


