import React from "react";
import {connect} from "react-redux";
import {AppStatePropsType} from "../../redux/reduxStore";
import {
    changeCurrentPage,
    toggleFollowingInProgress,
    userPropsType, getUserThunkCreator, followThunk, unFollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/usersSelector";


export type mapStateToPropsType = {
    users: Array<userPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    changeCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUser: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersApiComponent extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.getUser(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollowUsers={this.props.unFollow}
                followUsers={this.props.follow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followThunk,
        unFollow: unFollowThunk,
        changeCurrentPage,
        toggleFollowingInProgress,
        getUser: getUserThunkCreator
    }))(UsersApiComponent);