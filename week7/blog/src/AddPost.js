import React, { useState } from "react";
import "./Post.css";

const AddPost = function(props) {
    const [text, setText] = useState('');

    const updateText = function(event) {
        setText(event.target.value);
        // console.log('Input text:', text);
    };

    return (
        <div className="post-container">
            <textarea onChange={updateText} type='text' value={text} />
            <br />
            <button onClick={() => props.onAdd(text)}>Add</button>
        </div>
    );
};

export default AddPost;