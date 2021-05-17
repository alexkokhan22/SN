import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../assets/images/user-1.png'

export type MessagePropsType = {
    message: string
    likeCount: number
}

const Post: React.FC<MessagePropsType> = (props) => {
    return (
            <div className={classes.post}>
                <div><img src={avatar}/></div>
                <div>{props.message}</div>
                <div>
                    <span>Like</span>
                    <span>{props.likeCount}</span>
                </div>
            </div>

    );
}

export default Post;