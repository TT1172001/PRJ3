// import libraries
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import resources
import { createComment } from "../../redux/actions/commentAction";
// import components
import Icons from "../Icons";

const InputComment = ({ children, post, onReply, setOnReply }) => {
  // set state
  const [content, setContent] = useState("");

  const { auth, socket, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  /**
   * @description Xử lý sự kiện nhấn gửi nội dung
   * @param {event} e
   * @date 01/2023
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      if (setOnReply) return setOnReply(false);
      return;
    }

    setContent("");

    const newComment = {
      content,
      likes: [],
      user: auth.user,
      createdAt: new Date().toISOString(),
      reply: onReply && onReply.commentId,
      tag: onReply && onReply.user,
    };

    dispatch(createComment({ post, newComment, auth, socket }));

    if (setOnReply) return setOnReply(false);
  };

  // Template
  return (
    <form className="card-footer comment_input" onSubmit={handleSubmit}>
      {children}
      <input
        type="text"
        placeholder="Add your comments..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          filter: theme ? "invert(1)" : "invert(0)",
          color: theme ? "white" : "#111",
          background: theme ? "rgba(0,0,0,.03)" : "",
        }}
      />

      <Icons setContent={setContent} content={content} theme={theme} />

      <button type="submit" className="postBtn">
        Post
      </button>
    </form>
  );
};

export default InputComment;
