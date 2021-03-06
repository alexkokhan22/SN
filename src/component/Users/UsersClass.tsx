import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import userPhoto
    from "../../assets/images/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png"
import axios from "axios";

class Users extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img className={classes.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                   </div>
                   <div>
                       {u.followed ?
                           <button onClick={() => this.props.unFollowUsers(u.id)}>unFollow</button>
                           : <button onClick={() => this.props.followUsers(u.id)}>Follow</button>}

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
}

export default Users;