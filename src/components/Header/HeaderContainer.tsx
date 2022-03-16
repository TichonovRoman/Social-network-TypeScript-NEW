import React from 'react';
import s from "./Header.module.css"
import {NavLink} from 'react-router-dom';
import {ReactComponent} from "*.svg";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthDataType, setAuthUserData} from "../../redux/auth-reducer";


type PropsType = {
    setAuthUserData: (data: AuthDataType) => {},
    isAuth: boolean,
    login: string,
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", {withCredentials: true}).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }

        })
    }

    render () {
        return <Header isAuth =  {this.props.isAuth}
                       login =  {this.props.login}

        />
    }

};

const MapStateTpProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})



export default connect(MapStateTpProps, {setAuthUserData}) (HeaderContainer);