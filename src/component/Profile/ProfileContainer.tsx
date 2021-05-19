import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersStatusThunk,
    profileUsersPropsType, savePhotoThunk, saveProfileThunk,
    setUsersProfileThunk,
    updateUsersStatusThunk
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../HOC/WithAuthRedirectComponent";
import {AppStatePropsType} from "../../redux/reduxStore";
import {compose} from "redux";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataReduxForm";

type PathParamsType = {
    userId: any
}


export type mapStateProfileToPropsType = {
    profile: profileUsersPropsType
    status: string
    myId: number | null
    isAuth: boolean
}

export type mapDispatchProfileToPropsType = {
    setUsersProfile: (userId: string | number | null) => void
    getStatus: (userId: string | number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (files: File) => void
    saveProfile: (formData: FormProfileDataType) => void
}

export type ProfileContainerPropsType = mapStateProfileToPropsType & mapDispatchProfileToPropsType

export type WitchRouterProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<WitchRouterProfileContainerType> {
    refresh() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.myId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUsersProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate(prevProps: Readonly<WitchRouterProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refresh()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppStatePropsType): mapStateProfileToPropsType => ({
    profile: state.profile.profile,
    status: state.profile.status,
    myId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersProfile: setUsersProfileThunk,
        getStatus: getUsersStatusThunk,
        updateStatus: updateUsersStatusThunk,
        savePhoto: savePhotoThunk,
        saveProfile: saveProfileThunk
    }),
    withRouter,
    withAuthRedirectComponent)(ProfileContainer);