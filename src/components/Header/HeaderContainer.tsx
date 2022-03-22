import React from 'react';
import s from "./Header.module.css"
import {NavLink} from 'react-router-dom';
import {ReactComponent} from "*.svg";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthDataType, getAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


type PropsType = {
    getAuthUserData: () => void,
    isAuth: boolean,
    login: string,
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
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



export default connect(MapStateTpProps, {getAuthUserData}) (HeaderContainer);