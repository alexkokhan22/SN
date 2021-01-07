import React from "react";
import classes from './Post.module.css';

type Message = {
    message: string
}

const Post: React.FC<Message> = (props) => {
    return (
            <div className={classes.post}>
                <div><img src={'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png'}/></div>
                <div>{props.message}</div>
                <div>
                    <span>Like</span>
                </div>
            </div>

    );
}

export default Post;