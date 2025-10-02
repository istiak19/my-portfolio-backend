import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/login", userController.loginUser);
router.get("/me/:id", userController.getMeUser);
router.post("/logout", userController.logoutUser);

export const userRoutes = router;