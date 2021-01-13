import React from "react";
import classes from "./ProfileInfo.module.css"



const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.img}><img src={'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'}/></div>
            <div className={classes.ava}>Ava + discription</div>
        </div>
    );
}

export default ProfileInfo;