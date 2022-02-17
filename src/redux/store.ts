import React from "react";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

export type DialogDataType = {
    id: string
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    friends: Array<FriendType>
}
export type ProfilePageType = {
    posts: Array<PostsDataType>,
    newPostText: string

}
export type MessagesPageType = {
    messages: Array<MessagesDataType>,
    dialogs: Array<DialogDataType>,
    newMessageText: string,
}

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}
export type StoreType = {
    _state: StateType,
    _callSubscriber: () => void,
    dispatch: (action: ActionsTypes) => void,
    subscribe: (observer: () => void) => void
    getState: () => StateType

}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>;

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are yuo?", likesCount: 15},
                {id: 2, message: "It`s my first post", likesCount: 20},
                {id: 3, message: "Hi", likesCount: 56},
                {id: 4, message: "Cool", likesCount: 20},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: '1', message: "Hi!",},
                {id: '2', message: "How are you doing?",},
                {id: '3', message: "What are you doing?",},
            ],
            dialogs: [
                {id: '1', name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg`},
                {
                    id: '2',
                    name: `Andrey`,
                    avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg`
                },
                {
                    id: '3',
                    name: `Sveta`,
                    avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg`
                },
                {
                    id: '4',
                    name: `Sasha`,
                    avatar: `https://yt3.ggpht.com/ytc/AAUvwng015d5KaGgzodaC6HmRLFwTZi8zmwZnt3onn4o=s900-c-k-c0x00ffffff-no-rj`
                },
                {
                    id: '5',
                    name: `Victor`,
                    avatar: `https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg`
                },
            ],
            newMessageText: '',
        },
        friends: [
            {id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg`},
            {
                id: 2,
                name: `Andrey`,
                avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg`
            },
            {id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg`},

        ]
    },
    _callSubscriber() {
        console.log("State is changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friends = friendsReducer(this._state.friends, action)

        this._callSubscriber()
    }


}
export default store