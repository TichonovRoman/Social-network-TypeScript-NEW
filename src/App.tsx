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
import {ActionsTypes, StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void

    addMessage: () => void
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

                                                               // updateNewMessageText = {props.updateNewMessageText}
                                                               // addMessage = {props.addMessage}

                                                               dispatch = {props.dispatch}

                                                               newMessageText = {props.state.dialogsPage.newMessageText}

                    />}/>
                    <Route path={"/profile"} element={<Profile posts={props.state.profilePage.posts}

                                                               dispatch = {props.dispatch}

                                                               newPostText = {props.state.profilePage.newPostText}



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