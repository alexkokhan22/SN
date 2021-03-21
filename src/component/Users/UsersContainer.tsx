import React from "react";
import {connect} from "react-redux";
import {AppStatePropsType} from "../../redux/reduxStore";
import {
    changeCurrentPage,
    follow,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers, unFollow,
    toggleFollowingInProgress,
    userPropsType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from "../../api/api";



export type mapStateToPropsType = {
    users: Array<userPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userPropsType>) => void
    changeCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersApiComponent extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress

    }
}


{/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUsers: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowUsers: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userPropsType>) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (currentPage: number) => {
            dispatch(changeCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(isFetchingAC(isFetching))
        }

    }

}*/
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersApiComponent);

export default UsersContainer;