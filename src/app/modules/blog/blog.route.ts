import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middleware/checkAuth";
import { blogController } from "./blog.controller";

const router = Router();

router.post("/create-blog", multerUpload.single("file"), blogController.blogCreated);
router.get("/", blogController.getBlog);
router.get("/:id", blogController.getByBlog);
router.patch("/:id", multerUpload.single("file"), blogController.updateBlog);
router.patch("/publish/:id", blogController.updatePublishBlogById);
router.delete("/:id", blogController.deleteBlog);

export const blogRoutes = router;