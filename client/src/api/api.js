const API_BASE_URL = "http://localhost:5000/api";

export const getPosts = async () => {
  const res = await fetch(`${API_BASE_URL}/posts`);
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/categories`);
  return res.json();
};

export const createPost = async (postData) => {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  return res.json();
};
