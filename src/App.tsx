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
import {ActionsTypes, StateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { StoreContext } from './StoreContext';

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
            <StoreContext.Consumer>
                {(store) => (
                    <Navbar friends={store.getState().friends}/>
                )
            }

            </StoreContext.Consumer>


            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<DialogsContainer />}/>
                    <Route path={"/profile"} element={<Profile />}/>
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