import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, savePhoto, setStatus, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

import {compose} from "redux";

type PathParamsType = {
    userId: string,
}


type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void,
    setStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: object) => void,
}
type MapStatePropsType = {
    profile: {
        "aboutMe": string,
        "contacts": {},
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string,
        "fullName": string,
        "userId": number,
        photos: {
            small: string,
            large: string,
        }
    },
    // isAuth: boolean
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : ""
            if (!userId) this.props.history.push("/login")
        }
        this.props.getUserProfile(userId)
        this.props.setStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto = {this.props.savePhoto}
            />
            )
        ;
    }
};


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, setStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

