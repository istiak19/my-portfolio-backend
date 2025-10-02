import httpStatus from 'http-status';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from './blog.service';

const blogCreated = catchAsync(async (req: Request, res: Response) => {
    const image = req.file?.path;
    const payload = {
        ...req.body,
        image
    };
    const blog = await blogService.blogCreated(payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog created successfully",
        data: blog
    });
});

const getBlog = catchAsync(async (req: Request, res: Response) => {
    const blog = await blogService.getBlog();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blogs retrieved successfully",
        data: blog
    });
});

const getByBlog = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const blog = await blogService.getByBlog(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog retrieved successfully",
        data: blog
    });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const image = req.file?.path;
    const payload = {
        ...req.body,
        image
    };

    const updatedBlog = await blogService.updateBlogById(id, payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog updated successfully",
        data: updatedBlog
    });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await blogService.deleteBlogById(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog deleted successfully",
        data: null
    });
});

export const blogController = {
    blogCreated,
    getBlog,
    getByBlog,
    updateBlog,
    deleteBlog
};