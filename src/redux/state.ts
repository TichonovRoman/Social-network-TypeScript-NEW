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

}
export type MessagesPageType = {
    messages: Array<MessagesDataType>,
    dialogs: Array<DialogDataType>,
}

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are yuo?", likesCount: 15},
            {id: 2, message: "It`s my first post", likesCount: 20},
            {id: 3, message: "Hi", likesCount: 56},
            {id: 4, message: "Cool", likesCount: 20},
        ],
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
    },
    friends: [
        { id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg` },
        { id: 2, name: `Andrey`, avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg` },
        { id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg` },

    ]
}



export let addPost = (postMessage:string) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
}

export default state