const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authenticateToken = require('../middleware/authMiddleware');

// createpost
router.post('/posts', authenticateToken, blogController.createPost);
// getallpost
router.get('/posts', authenticateToken, blogController.getAllPosts);
// getpostbyid
router.get('/posts/:id', authenticateToken, blogController.getPostById);
// updatepostbyid
router.put('/posts/:id', authenticateToken, blogController.updatePost);
// updatepost
router.delete('/posts/:id', authenticateToken, blogController.deletePost);
// deletepost 
module.exports = router;
