
import profileReducer, {addPostActionCreator, ProfilePageType} from "./profile-reducer";



test("in dialogs should add post", () => {

    let initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, how are yuo?", likesCount: 15},
            {id: 2, message: "It`s my first post", likesCount: 20},
            {id: 3, message: "Hi", likesCount: 56},
            {id: 4, message: "Cool", likesCount: 20},
        ],

        profile: null,
        status: ""
    }

    initialState = profileReducer(initialState, addPostActionCreator("it-kamasutra.com"))

    expect( initialState.posts[4].message).toBe('it-kamasutra.com')

})



