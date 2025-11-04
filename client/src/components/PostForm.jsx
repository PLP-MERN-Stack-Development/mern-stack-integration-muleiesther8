import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/posts", { title, content, author });
      onPostCreated(res.data); // refresh post list
      setTitle("");
      setContent("");
      setAuthor("");
      alert("✅ Post created successfully!");
    } catch (error) {
      console.error("❌ Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Create New Post</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
