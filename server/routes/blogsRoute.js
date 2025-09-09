import express from "express"
import { createBlog, createBlogWebsite, getBlogs, getSingleBlogPage } from "../controllers/blogsController.js"

const router = express.Router()

router.post("/", createBlogWebsite)
router.get("/", getBlogs)
router.get("/:id", getSingleBlogPage)
router.put("/:id", createBlog)

export default router