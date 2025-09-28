import httpStatus from 'http-status';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from './user.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await userService.loginUser(email, password);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Login successful",
    data: { user, token }
  });
});

export const userController = {
   loginUser
};