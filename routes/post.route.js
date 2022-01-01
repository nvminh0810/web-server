const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.get("/", getPosts);
router.get("/:postId", getPostById);
router.post("/create", createPost);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);

module.exports = router;
