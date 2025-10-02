import httpStatus from 'http-status';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from './project.service';

const projectCreated = catchAsync(async (req: Request, res: Response) => {
    const image = req.file?.path;
    const payload = {
        ...req.body,
        image
    }
    const project = await projectService.projectCreated(payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Project created successfully",
        data: project
    });
});

const getProject = catchAsync(async (req: Request, res: Response) => {
    const project = await projectService.getProject();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Projects retrieved successfully",
        data: project
    });
});

const getByProject = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const project = await projectService.getByProject(Number(id));

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project retrieved successfully",
        data: project
    });
});

const projectDelete = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const project = await projectService.projectDelete(Number(id));

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project deleted successfully",
        data: project
    });
});

export const projectController = {
    projectCreated,
    getProject,
    getByProject,
    projectDelete
};