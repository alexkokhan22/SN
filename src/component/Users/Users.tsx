import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import classes from "./Users.module.css";

const Users: React.FC<UsersContainerPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photo: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',
            followed: true,
            fullName: 'Alex',
            status: 'I am a programmer',
            location: {country: 'Belarus', city: 'Mazyr'}
        },
            {
                id: 2,
                photo: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',
                followed: true,
                fullName: 'Lera',
                status: 'I am a cosmetologist',
                location: {country: 'Belarus', city: 'Mazyr'}
            },
            {
                id: 3,
                photo: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',
                followed: true,
                fullName: 'Roma',
                status: 'I am a baby',
                location: {country: 'Belarus', city: 'Mazyr'}
            },
            {
                id: 4,
                photo: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png',
                followed: false,
                fullName: 'Dima',
                status: 'I am a programmer',
                location: {country: 'Belarus', city: 'Minsk'}
            },])
    }
    return (
        <div>
            {props.users.map( u => <div key={u.id}>
               <span>
                   <div>
                       <img className={classes.img}  src={u.photo}/>
                   </div>
                   <div>
                       {u.followed ?
                           <button onClick={() => props.unFollowUsers(u.id)}>unFollow</button>
                           : <button onClick={() => props.followUsers(u.id)}>Follow</button>}

                   </div>
               </span>

                <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
            </div>)}
        </div>

    )
}

export default Users;