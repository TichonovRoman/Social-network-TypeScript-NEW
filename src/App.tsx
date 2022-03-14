import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
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
                <>
                    <Route path={"/dialogs"} component={DialogsContainer}/>
                    <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                    <Route path={"/users"} component={UsersContainer}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </>
            </div>
            <Footer/>


        </div>
    );
}


export default App;