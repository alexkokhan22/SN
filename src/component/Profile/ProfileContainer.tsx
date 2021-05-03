import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersStatusThunk,
    profileUsersPropsType,
    setUsersProfileThunk,
    updateUsersStatusThunk
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../HOC/WithAuthRedirectComponent";
import {AppStatePropsType} from "../../redux/reduxStore";
import {compose} from "redux";

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
}

export type ProfileContainerPropsType = mapStateProfileToPropsType & mapDispatchProfileToPropsType

export type WitchRouterProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<WitchRouterProfileContainerType> {

    componentDidMount() {
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

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus = {this.props.updateStatus}
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
        updateStatus: updateUsersStatusThunk}),
    withRouter,
    withAuthRedirectComponent)(ProfileContainer);