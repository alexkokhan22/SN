import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src={'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'}/></div>
            <div>Ava + discription</div>
            <div>
                My post
                <div className={classes.item}>New Post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
}

export default Profile;