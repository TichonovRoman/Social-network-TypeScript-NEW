import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


test('renders learn react link', () => {
  render(<App state = {state}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
              updateNewMessageText={updateNewMessageText}
              addMessage = {addMessage}

  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
