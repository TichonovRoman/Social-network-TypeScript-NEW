
import profileReducer, {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "./profile-reducer";



test("in dialogs should add post", () => {

    let initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, how are yuo?", likesCount: 15},
            {id: 2, message: "It`s my first post", likesCount: 20},
            {id: 3, message: "Hi", likesCount: 56},
            {id: 4, message: "Cool", likesCount: 20},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null
    }

    initialState = profileReducer(initialState, addPostActionCreator())

    expect( initialState.posts[4].message).toBe('it-kamasutra.com')

})

test("in dialogs should update post", () => {

    let initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, how are yuo?", likesCount: 15},
            {id: 2, message: "It`s my first post", likesCount: 20},
            {id: 3, message: "Hi", likesCount: 56},
            {id: 4, message: "Cool", likesCount: 20},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null
    }

    initialState = profileReducer(initialState, updateNewPostTextActionCreator("Hi peoples"))

    expect( initialState.newPostText).toBe("Hi peoples")

})

