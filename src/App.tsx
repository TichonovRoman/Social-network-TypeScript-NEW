import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect, Provider, ReactReduxContext} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
const Login = React.lazy(() => import('./components/Login/Login'));

import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
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
                        <React.Suspense fallback={<Preloader/>}>
                        <Route path={"/dialogs"} component={DialogsContainer}/>
                        <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                        <Route path={"/users"} component={UsersContainer}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/login"} component={Login}/>
                        </React.Suspense>
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
let AppContainer = connect(mapStateToProps, {initializeApp}) (App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp