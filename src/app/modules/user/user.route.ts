import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/login", userController.loginUser);

export const userRoutes = router;