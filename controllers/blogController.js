const BlogPost = require('../models/blogPostModel');


// creating a post
const createPost = (req, res) => {
  const { title, content } = req.body;
  const author_id = req.user.id;
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  BlogPost.createPost(title, content, author_id, (err, result) => {
    if (err) {
      return res.status(500).send('Error creating post');
    }
    res.status(201).send('Post created successfully');
  });
};

// getting all the post
const getAllPosts = (req, res) => {
  BlogPost.getAllPosts((err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving posts');
    }
    res.json(results);
  });
};

// getting a data by id
const getPostById = (req, res) => {
  const { id } = req.params;
  BlogPost.getPostById(id, (err, result) => {
    if (err) {
      return res.status(500).send('Error retrieving post');
    }
    if (result.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(result[0]);
  });
};

// updating a post
const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  BlogPost.updatePost(id, title, content, (err, result) => {
    if (err) {
      return res.status(500).send('Error updating post');
    }
    res.send('Post updated successfully');
  });
};

// deleting a post
const deletePost = (req, res) => {
  const { id } = req.params;
  BlogPost.deletePost(id, (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting post');
    }
    res.send('Post deleted successfully');
  });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};
