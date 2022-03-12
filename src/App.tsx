import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ReactReduxContext} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


//
// type AppPropsType = {
//     state: StateType
//     dispatch: (action: ActionsTypes) => void
//
//
// }


const App: React.FC = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <ReactReduxContext.Consumer>
                {(store) => (
                    <Navbar friends={store.store.getState().friends}/>
                )
            }

            </ReactReduxContext.Consumer>


            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<DialogsContainer />}/>
                    <Route path={"/profile"} element={<ProfileContainer />}/>
                    <Route path={"/users"} element={<UsersContainer/>}/>
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