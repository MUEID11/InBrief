import React, { useState } from "react";

const Reply = ({ onReply }) => {
    const [text, setText] = useState("");

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (text) {
            const replyData = { text, username: "YourUsername" }; // Replace with actual username logic
            onReply(replyData);
            setText("");
        }
    };

    return (
        <form onSubmit={handleReplySubmit}>
            <input
                type="text"
                placeholder="Write a reply..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">Reply</button>
        </form>
    );
};

export default Reply;
