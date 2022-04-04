import dialogsReducer, {ADD_MESSAGE} from "./dialogs-reducer";

// test("in dialogs should update message", () => {
//     let initialState = {
//         messages: [
//             {id: '1', message: "Hi!",},
//             {id: '2', message: "How are you doing?",},
//             {id: '3', message: "What are you doing?",},
//         ],
//         dialogs: [
//             {id: '1', name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg`},
//             {
//                 id: '2',
//                 name: `Andrey`,
//                 avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg`
//             },
//             {
//                 id: '3',
//                 name: `Sveta`,
//                 avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg`
//             },
//             {
//                 id: '4',
//                 name: `Sasha`,
//                 avatar: `https://yt3.ggpht.com/ytc/AAUvwng015d5KaGgzodaC6HmRLFwTZi8zmwZnt3onn4o=s900-c-k-c0x00ffffff-no-rj`
//             },
//             {
//                 id: '5',
//                 name: `Victor`,
//                 avatar: `https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg`
//             },
//         ],
//         newMessageText: '',
//     }
//
//     initialState = dialogsReducer(initialState, {type: UPDATE_NEW_MESSAGE_TEXT, newText: "123"})
//
//     expect( initialState.newMessageText).toBe("123")
//
// })

test("in dialogs should add new message", () => {
    let initialState = {
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
        // newMessageText: '',
    }

    initialState = dialogsReducer(initialState, {type: ADD_MESSAGE, text: "123"})

    expect( initialState.messages[3].message).toBe("123")

})




