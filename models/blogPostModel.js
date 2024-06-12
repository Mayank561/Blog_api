const db = require('../config/db');

// post creatign query
const createPost = (title, content, author_id, callback) => {
  const query = 'INSERT INTO blog_posts (title, content, author_id) VALUES (?, ?, ?)';
  db.query(query, [title, content, author_id], callback);
};


// get all post query
const getAllPosts = (callback) => {
  const query = 'SELECT * FROM blog_posts';
  db.query(query, callback);
};

// getting a post by id query

const getPostById = (id, callback) => {
  const query = 'SELECT * FROM blog_posts WHERE id = ?';
  db.query(query, [id], callback);
};

// updating a post query
const updatePost = (id, title, content, callback) => {
  const query = 'UPDATE blog_posts SET title = ?, content = ? WHERE id = ?';
  db.query(query, [title, content, id], callback);
};

// deletingpost query
function deletePost(id, callback) {
  const query = 'DELETE FROM blog_posts WHERE id = ?';
  db.query(query, [id], callback);
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
