import express from "express";
import {
	blogPost,
	blogUpdate,
	getAllBlog,
	getBlog,
} from "../../controllers/BlogController/post.controller.js";
const router = express.Router();
router.post("/post", blogPost);
router.put("/:id", blogUpdate);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
export { router as blogRouter };
