import { Router } from "express";
import { userController } from "./user.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.post("/login", userController.loginUser);
router.get("/me/:id", checkAuth(["Admin"]), userController.getMeUser);
router.post("/logout", userController.logoutUser);

export const userRoutes = router;