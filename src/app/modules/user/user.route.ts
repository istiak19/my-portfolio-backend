import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.get("/", userController.getAllUser);
router.post("/register", userController.createUser);

export const userRoutes = router;