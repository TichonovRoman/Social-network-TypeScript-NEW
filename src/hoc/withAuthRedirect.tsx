import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: AppStateType): {isAuth: boolean} => ({
    isAuth: state.auth.isAuth,
})


export function WithAuthRedirect<T>(Component: ComponentType<T>) {



    const RedirectComponent = (props: {isAuth: boolean}) => {
        let {isAuth, ...restprops} = props
        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restprops as T}/>
    }



    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
};

export default WithAuthRedirect;