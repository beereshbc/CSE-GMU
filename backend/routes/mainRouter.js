import express from "express";

import {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  togglePublish,
} from "../controllers/mainController.js"; // Adjust path to your controller
import upload from "../middleware/multer.js";

const mainRouter = express.Router();

// Blog Routes
// Expects an image file under the field name 'image'
mainRouter.post("/addBlog", upload.single("image"), addBlog);
mainRouter.get("/getAllBlogs", getAllBlogs);
mainRouter.get("/getBlogById/:blogId", getBlogById);
mainRouter.post("/deleteBlogById", deleteBlogById);
mainRouter.post("/togglePublish", togglePublish);

export default mainRouter;
