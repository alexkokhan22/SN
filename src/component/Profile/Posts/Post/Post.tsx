import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../assets/images/5.jpg'

export type MessagePropsType = {
    message: string
    likeCount: number
}

const Post: React.FC<MessagePropsType> = (props) => {
    return (
            <div className={classes.post}>
                <div><img src={avatar}/></div>
                <div className={classes.messagesContainer}>
                    <div className={classes.message}>{props.message}</div>
                    <div className={classes.likes}>
                        <span>Like</span>
                        <span>{props.likeCount}</span>
                    </div>
                </div>
            </div>

    );
}

export default Post;