import React from "react";
import classes from "./Users.module.css";
import userPhoto
    from "../../assets/images/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png";
import {userPropsType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    users: userPropsType
    followUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

const User = (props: UserPropsType) => {
    return (
        <div className={classes.userContainer}>
               <span>
                   <div className={classes.name}>{props.users.name}</div>
                   <div>{props.users.status}</div>
               </span>
               <span>
                   <div>
                       <NavLink to={'/profile/' + props.users.id}>
                           <img className={classes.img}
                                src={props.users.photos.small != null ? props.users.photos.small : userPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {props.users.followed ?
                           <button className={classes.buttonFollow} disabled={props.followingInProgress.some(id => id === props.users.id)}
                                   onClick={() => {
                                       props.unFollowUsers(props.users.id)
                                   }}>unFollow</button>

                           : <button className={classes.buttonFollow} disabled={props.followingInProgress.some(id => id === props.users.id)}
                                     onClick={() => {
                                         props.followUsers(props.users.id)

                                     }}>Follow</button>}
                   </div>
               </span>
        </div>
    )
}

export default User;