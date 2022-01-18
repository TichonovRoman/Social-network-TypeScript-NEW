import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

let posts: Array<PostsDataType> = [
    {id: 1, message: "Hi, how are yuo?", likesCount: 15},
    {id: 2, message: "It`s my first post", likesCount: 20},
    {id: 3, message: "Hi", likesCount: 56},
    {id: 4, message: "Cool", likesCount: 20},
]


export type DialogDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}

let messages: Array<MessagesDataType> = [
    {id: "1", message: "Hi!",},
    {id: "2", message: "How are you doing?",},
    {id: "3", message: "What are you doing?",},
]


let dialogs: Array<DialogDataType> = [
    {id: "1", name: "Dimych",},
    {id: "2", name: "Andrey",},
    {id: "3", name: "Sveta",},
    {id: "4", name: "Viktor",},
    {id: "5", name: "Valera",},
]


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts = {posts} messages={messages} dialogs={dialogs}/>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
