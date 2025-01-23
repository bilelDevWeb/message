import React from "react";
import { PostProvider } from "./context/PostContext";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <PostProvider>
      <div>
        <h1>Post Manager</h1>
        <PostForm />
        <PostList />
      </div>
    </PostProvider>
  );
}

export default App;