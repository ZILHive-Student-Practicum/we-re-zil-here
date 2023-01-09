import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    const max = 5;
    const min = 1;
    // let profileNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let profileUrl = "/profile" + Math.floor(Math.random() * (max - min + 1) + min) + ".jpg";
    return (
        <div className="post">
            <div className="post__header">
                {/* Header: avatar with username */}
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={profileUrl}
                />
                <h3>{username}</h3>
            </div>
            {/* Image */}
            <img className="post__image" src={imageUrl} alt="" />
            {/* Username + caption */}
            <h4 className="post__text">
                <strong>{username}</strong> {caption}
            </h4>
        </div>
    );
}

export default Post;
