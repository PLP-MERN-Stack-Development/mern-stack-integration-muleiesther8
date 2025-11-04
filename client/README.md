



📝 MERN Blog Application
📘 Project Overview

This project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application developed as part of the Week 4 MERN Stack Integration Assignment.
It demonstrates complete integration between the front-end and back-end, covering CRUD operations, RESTful API communication, and MongoDB database connectivity.

🚀 Features Implemented

Create, Read, Update, and Delete (CRUD) blog posts

RESTful API built with Express.js and Mongoose

MongoDB database integration using Mongoose ODM

Front-end built with React.js (Vite)

State management using React Hooks (useState, useEffect)

Dynamic rendering of blog posts

Input validation and error handling

Responsive user interface

Configurable environment variables for secure setup

⚙️ Tech Stack
Layer	Technology
Front-End	React.js (Vite), CSS
Back-End	Node.js, Express.js
Database	MongoDB (Mongoose)
Environment	dotenv
Tools	Postman, Nodemon, CORS, Morgan
📂 Project Structure
mern-stack-integration-muleiesther8/
│
├── server/
│   ├── models/
│   │   ├── post.js
│   │   └── category.js
│   ├── routes/
│   │   ├── posts.js
│   │   └── categories.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostList.jsx
│   │   │   └── PostForm.jsx
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env
│
└── README.md

🔌 Setup Instructions
1️⃣ Prerequisites

Node.js (v18+)

MongoDB installed locally or via Atlas

2️⃣ Clone the Repository
git clone <your-classroom-repo-url>
cd mern-stack-integration-muleiesther8

3️⃣ Server Setup
cd server
npm install


Create a .env file in the server directory:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_blog


Start the backend:

npm run dev

4️⃣ Client Setup
cd client
npm install
npm start


The app should now open at:
👉 http://localhost:3000

🧠 API Endpoints
Method	Endpoint	Description
GET	/api/posts	Get all blog posts
GET	/api/posts/:id	Get a single blog post
POST	/api/posts	Create a new blog post
PUT	/api/posts/:id	Update an existing blog post
DELETE	/api/posts/:id	Delete a blog post
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category
🧩 Advanced Features (Optional)

User authentication (JWT)

Image uploads

Pagination and search

Commenting system


🖼️ Home Page (Blog List)

Displays all created posts with titles, content, and authors.

🖋️ Create Post

Form for adding a new blog post dynamically.

⚙️ MongoDB Connection

Server connects successfully to MongoDB at startup.

🧾 Author

Esther Mulei
MERN Stack Integration – Week 4 Assignment
MuleiESTHER8