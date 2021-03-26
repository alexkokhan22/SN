import React from "react";
import {connect} from "react-redux";
import {AppStatePropsType} from "../../redux/reduxStore";
import {
    changeCurrentPage,
    follow,
    unFollow,
    toggleFollowingInProgress,
    userPropsType, getUserThunkCreator, followThunk, unFollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";


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
        if(this.props.isAuth === false) {
            return <Redirect to={'/login'}/>
        }

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
        followingInProgress: state.users.followingInProgress,
        isAuth: state.auth.isAuth

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
    follow: followThunk,
    unFollow: unFollowThunk,
    changeCurrentPage,
    toggleFollowingInProgress,
    getUser: getUserThunkCreator
})(UsersApiComponent);

export default UsersContainer;