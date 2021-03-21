import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileUsersPropsType, setUsersProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";

type PathParamsType = {
    userId: string
}


export type mapStateProfileToPropsType = {
    profile: profileUsersPropsType


}

export type mapDispatchProfileToPropsType = {
    setUsersProfile: (profile: profileUsersPropsType) => void
}

export type ProfileContainerPropsType = mapStateProfileToPropsType & mapDispatchProfileToPropsType

export type WitchRouterProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<WitchRouterProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        profileApi.setUsersProfile(userId)
            .then((data) => {
                this.props.setUsersProfile(data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profile.profile
})

let UserIdUrlProfilePage = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(UserIdUrlProfilePage);