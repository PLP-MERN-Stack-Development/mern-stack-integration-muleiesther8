import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  // 🔹 Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  // 🔹 Add a new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", form);
      setForm({ title: "", content: "", author: "" });
      fetchPosts(); // refresh after posting
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", textAlign: "center" }}>
      <h1>📝 MERN Blog</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Add Post
        </button>
      </form>

      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Create one</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <strong>Author:</strong> {post.author || "Anonymous"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
