import React from "react";

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
    // addPost: () => void,
    // updateNewPostText: (newText:string) => void,
    dispatch: (action: ActionsTypes) => void,
    addMessage: () => void,
    updateNewMessageText: (newText:string) => void,
    subscribe: (observer: () => void) => void
    getState: () => StateType

}

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextType = {
    type: `UPDATE-NEW-POST-TEXT`,
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType;

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
            { id: '1', name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg` },
            { id: '2', name: `Andrey`, avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg` },
            { id: '3', name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg` },
            { id: '4', name: `Sasha`, avatar: `https://yt3.ggpht.com/ytc/AAUvwng015d5KaGgzodaC6HmRLFwTZi8zmwZnt3onn4o=s900-c-k-c0x00ffffff-no-rj` },
            { id: '5', name: `Victor`, avatar: `https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg` },
        ],
        newMessageText: '',
    },
    friends: [
        { id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg` },
        { id: 2, name: `Andrey`, avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg` },
        { id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg` },

    ]
},
    _callSubscriber () {
        console.log("State is changed")
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    addMessage () {
        const newMessage: MessagesDataType = {
            id: "76",
            message: this._state.dialogsPage.newMessageText,

        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
    },
    updateNewMessageText (newText:string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },

    dispatch (action) {
        if (action.type === `ADD-POST`) {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === `UPDATE-NEW-POST-TEXT`) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }

    }

}

export default store