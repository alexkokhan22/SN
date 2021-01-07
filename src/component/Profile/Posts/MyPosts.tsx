import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
    return (
        <div >
            <div className={classes.item}>
                My post
            </div>
            <Post message={'My first post'} />
            <Post message={'Hi, how are you'} />
        </div>
    );
}

export default MyPosts;