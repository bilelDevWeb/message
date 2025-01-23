import React, { useState } from "react";
import { usePostContext } from "../context/PostContext";

function PostForm() {
  const [content, setContent] = useState("");
  const { dispatch } = usePostContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch({ type: "ADD_POST", payload: { id: Date.now(), content } });
      setContent("");
    } else {
      alert("Post content cannot be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your post"
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
}

export default PostForm;