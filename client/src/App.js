import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 MERN Blog</h1>
      <PostForm onPostCreated={() => setReload(!reload)} />
      <PostList reload={reload} />
    </div>
  );
}

export default App;
