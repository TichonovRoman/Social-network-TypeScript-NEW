import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


type PropsType = {
    logout: () => void,
    isAuth: boolean,
    login: string,
}

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return <Header isAuth =  {this.props.isAuth}
                       login =  {this.props.login}
                       logout =  {this.props.logout}

        />
    }

};

const MapStateTpProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})



export default connect(MapStateTpProps, {logout}) (HeaderContainer);