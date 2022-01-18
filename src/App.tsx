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
import {DialogDataType, MessagesDataType, PostsDataType} from "./index";


type AppPropsType = {
    posts: Array<PostsDataType>
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
}




const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs dialogs = {props.dialogs} messages={props.messages}/>}/>
                    <Route path={"/profile"} element={<Profile posts = {props.posts}/>}/>
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