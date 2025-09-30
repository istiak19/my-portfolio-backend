import { Router } from "express";
import { infoController } from "./info.controller";

const router = Router();

router.get("/", infoController.aboutInfo);

export const infoRoutes = router;