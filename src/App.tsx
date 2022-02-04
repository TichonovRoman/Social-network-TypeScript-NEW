import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (text: string)=> void
    updateNewMessageText: (text:string) => void
}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages}
                                                               updateNewMessageText = {props.updateNewMessageText}
                                                               addMessage = {props.addMessage}
                                                               newMessageText = {props.state.dialogsPage.newMessageText}

                    />}/>
                    <Route path={"/profile"} element={<Profile posts={props.state.profilePage.posts}
                                                               addPost = {props.addPost}
                                                               newPostText = {props.state.profilePage.newPostText}
                                                               updateNewPostText = {props.updateNewPostText}


                    />}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>


        </div>
    );
}


export default App;