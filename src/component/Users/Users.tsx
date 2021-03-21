import React from "react";
import classes from "./Users.module.css";
import userPhoto
    from "../../assets/images/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png";
import {userPropsType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../api/api";

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
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? classes.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}>{p}
                        </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                           <img className={classes.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                       </NavLink>

                   </div>
                   <div>
                       {u.followed ?
                           <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.toggleFollowingInProgress(true, u.id)
                               usersApi.unFollowUsers(u.id).then((data) => {
                                   if (data.resultCode == 0) {
                                       props.unFollowUsers(u.id)
                                   }
                                   props.toggleFollowingInProgress(false, u.id)
                               })
                           }}>unFollow</button>

                           : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.toggleFollowingInProgress(true, u.id)
                               usersApi.followUsers(u.id).then((data) => {
                                   if (data.resultCode == 0) {
                                       props.followUsers(u.id)
                                   }
                                   props.toggleFollowingInProgress(false, u.id)
                               })

                           }}>Follow</button>}

                   </div>
               </span>

                <span>
                   <span>
                       <div>{u.name}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div></div>
                       <div></div>
                   </span>
               </span>
            </div>)}
        </div>
    )
}

export default Users;