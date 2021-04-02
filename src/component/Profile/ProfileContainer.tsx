import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileUsersPropsType, setUsersProfileThunk} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../HOC/WithAuthRedirectComponent";
import {AppStatePropsType} from "../../redux/reduxStore";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}


export type mapStateProfileToPropsType = {
    profile: profileUsersPropsType
}

export type mapDispatchProfileToPropsType = {
    setUsersProfile: (userId: string) => void
}

export type ProfileContainerPropsType = mapStateProfileToPropsType & mapDispatchProfileToPropsType

export type WitchRouterProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<WitchRouterProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setUsersProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppStatePropsType): mapStateProfileToPropsType => ({
    profile: state.profile.profile
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersProfile: setUsersProfileThunk}),
    withRouter,
    withAuthRedirectComponent)(ProfileContainer);