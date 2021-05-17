import React from "react";
import {userPropsType} from "../../redux/usersReducer";
import Paginator from "../common/Paginator/Paginators";
import User from "./User";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userPropsType>
    followUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={10}/>

            {props.users.map(u => <User
                key={u.id}
                users={u}
                followUsers={props.followUsers}
                unFollowUsers={props.unFollowUsers}
                toggleFollowingInProgress={props.toggleFollowingInProgress}
                followingInProgress={props.followingInProgress}/>
            )}
        </div>
    )
}

export default Users;