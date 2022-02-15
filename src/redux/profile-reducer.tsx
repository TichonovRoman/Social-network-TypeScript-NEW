import {ActionsTypes, MessagesDataType, PostsDataType, ProfilePageType} from "./store";

const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are yuo?", likesCount: 15},
        {id: 2, message: "It`s my first post", likesCount: 20},
        {id: 3, message: "Hi", likesCount: 56},
        {id: 4, message: "Cool", likesCount: 20},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: return state
    }



}

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const

export default profileReducer;


