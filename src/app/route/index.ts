import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { infoRoutes } from "../modules/info/info.route";
import { projectRoutes } from "../modules/project/project.route";

export const router = Router();

const moduleRouter = [
    {
        path: "/user",
        route: userRoutes
    },
    {
        path: "/info",
        route: infoRoutes
    },
    {
        path: "/project",
        route: projectRoutes
    },
];

moduleRouter.forEach((route) => {
    router.use(route.path, route.route)
});