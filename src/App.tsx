import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect, ReactReduxContext} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType = {
    initializeApp: () => void,
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
       this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        } else

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
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
                        <Route path={"/login"} component={Login}/>
                    </>
                </div>
                <Footer/>


            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp}) (App);