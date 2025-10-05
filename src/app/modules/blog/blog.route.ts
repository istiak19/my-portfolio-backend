import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middleware/checkAuth";
import { blogController } from "./blog.controller";

const router = Router();

router.post("/create-blog", checkAuth(["Admin"]), multerUpload.single("file"), blogController.blogCreated);
router.get("/", blogController.getBlog);
router.get("/:id", blogController.getByBlog);
router.patch("/:id", checkAuth(["Admin"]), multerUpload.single("file"), blogController.updateBlog);
router.patch("/publish/:id", checkAuth(["Admin"]), checkAuth(["Admin"]), blogController.updatePublishBlogById);
router.delete("/:id",checkAuth(["Admin"]), blogController.deleteBlog);

export const blogRoutes = router;