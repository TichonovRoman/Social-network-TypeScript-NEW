import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

type PostsDataType = {
  id: number
  message: string
  likesCount: number
}
type DialogDataType = {
  id: string
  name: string
}
type MessagesDataType = {
  id: string
  message: string
}

let posts: Array<PostsDataType> = [
  {id: 1, message: "Hi, how are yuo?", likesCount: 15},
  {id: 2, message: "It`s my first post", likesCount: 20},
  {id: 3, message: "Hi", likesCount: 56},
  {id: 4, message: "Cool", likesCount: 20},
]
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

test('renders learn react link', () => {
  render(<App posts={posts} messages={messages} dialogs={dialogs}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
