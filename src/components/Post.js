import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, MoreHoriz, NearMeOutlined, ThumbUpOutlined } from '@material-ui/icons';
import React from 'react';
import "./CSS/Post.css";

function Post({ profilePic, image, username , timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar className="post_Avatar" src={profilePic} />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toDateString()}</p>
                </div>
                {/* <div className="post_topInfo post_more">
                    <MoreHoriz style={{marginLeft: 320}} />
                </div> */}
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpOutlined />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeOutlined />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
