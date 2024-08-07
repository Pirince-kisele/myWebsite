const express = require("express");
const router = express.Router();
const Blog = require("../model/blog.js")
const { authUser, admin} = require("../middleware/auth")

// Create a blog (admin only)
router.post("/" [authUser, admin], async (req, res)=>{
   const blog = new Blog({
      ...req.body,
      author: req.user.userId
   });
   await blog.save()
   res.status(201).json(blog)
});
//get all blogs
router.get("/", async (req, res)=>{

   const blogs = await Blog.find().populate("author", "username");
   res.json(blogs)
})

//Like a post
router.post("/:id/like", authUser, async (req, res)=>{
   const blog = await Blog.findById(req.params.id);
   if (!blog.likes.includes(req.user.userId)){
      blog.likes.push(req.user.userId);
      await blog.save();
   }
   res.json(blog)
})


//comment on post
router.post("/:id/comment", authUser, async (req, res)=>{
   const blog = await Blog.findById(req.params.id);
   blog.comments.push({user: req.user.useerId, comment: req.body.comment});
   await blog.save();
   res.json(blog)
})

module.exports = router