import profileReducer, {addPostActionCreator, deletePostActionCreator, ProfilePageType} from "./profile-reducer";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are yuo?", likesCount: 15},
        {id: 2, message: "It`s my first post", likesCount: 20},
        {id: 3, message: "Hi", likesCount: 56},
        {id: 4, message: "Cool", likesCount: 20},
    ],

        profile: {
            "aboutMe": "",
            "contacts": {
                "github": "",
                "vk": "",
                "facebook": "",
                "instagram": "",
                "twitter": "",
                "website": "",
                "youtube": "",
                "mainLink": "",
            },
            "lookingForAJob": false,
            "lookingForAJobDescription": "",
            "fullName": "",
            "userId": 0,
            photos: {
                small: "",
                large: "",
            }
        },
    status: ""
}

test("in dialogs should add post", () => {
    initialState = profileReducer(initialState, addPostActionCreator("it-kamasutra.com"))
    expect(initialState.posts[4].message).toBe('it-kamasutra.com')
})
test("in dialogs should changed length", () => {

    initialState = profileReducer(initialState, addPostActionCreator("it-kamasutra.com"))
    expect(initialState.posts.length).toBe(5)

})
test("after deleting length should be decrement ", () => {

    initialState = profileReducer(initialState, deletePostActionCreator(1))
    expect(initialState.posts.length).toBe(3)

})



