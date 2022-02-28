import profileReducer, {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "./profile-reducer";
import {v1} from "uuid";
import usersReducer, {followAC, setUsersAC, unfollowAC, UsersDataType} from "./users-reducer";

type UsersType = {
    users: Array<UsersDataType>
}

test("one user should by followed", () => {

    const userID1 = v1()
    const userID2 = v1()
    const userID3 = v1()

    let initialState: UsersType = {
        users: [
            {
                id: userID1,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Dmitry",
                status: "I am boss",
                  },
            {
                id: userID2,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: true,
                name: "Roman",
                status: "Hi",
                       },
            {
                id: userID3,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Alina",
                status: "I am wave Roman",
               },
        ]}

        initialState = usersReducer(initialState, followAC(userID1))

        expect(initialState.users[0].followed).toBe(true)
        expect(initialState.users[1].followed).toBe(true)
        expect(initialState.users[2].followed).toBe(false)

})

test("one user should by unfollowed", () => {

    const userID1 = v1()
    const userID2 = v1()
    const userID3 = v1()

    let initialState: UsersType = {
        users: [
            {
                id: userID1,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Dmitry",
                status: "I am boss",
                            },
            {
                id: userID2,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: true,
                name: "Roman",
                status: "Hi",

            },
            {
                id: userID3,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Alina",
                status: "I am wave Roman",
               },
        ]}

    initialState = usersReducer(initialState, unfollowAC(userID2))

    expect(initialState.users[0].followed).toBe(false)
    expect(initialState.users[1].followed).toBe(false)
    expect(initialState.users[2].followed).toBe(false)

})
test("new users should by added", () => {

    const userID1 = v1()
    const userID2 = v1()
    const userID3 = v1()
    const userID4 = v1()
    const userID5 = v1()
    const userID6 = v1()

    let initialState: UsersType = {
        users: [
            {
                id: userID1,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Dmitry",
                status: "I am boss",

            },
            {
                id: userID2,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: true,
                name: "Roman",
                status: "Hi",

            },
            {
                id: userID3,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Alina",
                status: "I am wave Roman",
                },
        ]}

    let newUsers: Array<UsersDataType> =
        [
            {
                id: userID4,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Dmitry",
                status: "I am boss",
               },
            {
                id: userID5,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: true,
                name: "Roman",
                status: "Hi",
                 },
            {
                id: userID6,
                photos:{
                    small: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                    large: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"
                },
                followed: false,
                name: "Alina",
                status: "I am wave Roman",
              },
        ]


    initialState = usersReducer(initialState, setUsersAC(newUsers))

    expect(initialState.users.length).toBe(6)
    expect(initialState.users[0].id).toBe(userID1)
    expect(initialState.users[1].id).toBe(userID2)
    expect(initialState.users[2].id).toBe(userID3)
    expect(initialState.users[3].id).toBe(userID4)
    expect(initialState.users[4].id).toBe(userID5)
    expect(initialState.users[5].id).toBe(userID6)


})



