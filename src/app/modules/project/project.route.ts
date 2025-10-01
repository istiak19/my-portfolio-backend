import { Router } from "express";
import { projectController } from "./project.controller";
import { multerUpload } from "../../config/multer.config";

const router = Router();

router.post("/create-project", multerUpload.single("file"), projectController.projectCreated);
router.delete("/:id", projectController.projectDelete);

export const projectRoutes = router;