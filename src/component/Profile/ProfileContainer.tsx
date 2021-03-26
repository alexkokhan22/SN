import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileUsersPropsType,  setUsersProfileThunk} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}


export type mapStateProfileToPropsType = {
    profile: profileUsersPropsType
    isAuth: boolean
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
        if(this.props.isAuth === false) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
})

let UserIdUrlProfilePage = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile: setUsersProfileThunk})(UserIdUrlProfilePage);