import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { getAboutInfo } from "./info.service";

const aboutInfo = catchAsync(async (req: Request, res: Response) => {
    const info = getAboutInfo();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "About info fetched successfully",
        data: info
    });
});

export const infoController = {
    aboutInfo
};