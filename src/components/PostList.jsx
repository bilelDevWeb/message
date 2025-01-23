import React from "react";
import { usePostContext } from "../context/PostContext";

function PostList() {
  const { state, dispatch } = usePostContext();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };

  return (
    <div>
      <h2>List of Posts</h2>
      {state.posts.length === 0 ? (
        <p>No posts available. Add one to get started!</p>
      ) : (
        <ul>
          {state.posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "10px" }}>
              <span>{post.content}</span>
              <button
                style={{
                  marginLeft: "10px",
                  color: "white",
                  backgroundColor: "red",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;