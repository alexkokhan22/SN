import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src={'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'}/></div>
            <div>Ava + discription</div>
            <MyPosts/>

        </div>
    );
}

export default Profile;