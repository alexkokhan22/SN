import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStatePropsType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, userPropsType} from "../../redux/usersReducer";


export type mapStateToPropsType = {
    users: Array<userPropsType>
}

export type mapDispatchToPropsType = {
    followUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
    setUsers: (users: Array<userPropsType>) => void

}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        users: state.users.users
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUsers: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowUsers: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;