import React from "react";
import "./Post.css";

const Post = (props) => {
    return (
        <div className="post-container">
            <span> Blog entry # {props.id}</span>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;