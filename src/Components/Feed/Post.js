import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, des, msg, photoURL }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL} />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{des}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{msg}</p>
            </div>
            <div className="post__button">
                <InputOption title="Like" Icon={ThumbUpAltIcon} color="gray" />
                <InputOption title="Comment" Icon={CommentIcon} color="gray" />
                <InputOption title="Share" Icon={ShareIcon} color="gray" />
                <InputOption title="Send" Icon={SendIcon} color="gray" />
            </div>
        </div>
    )
})

export default Post;
