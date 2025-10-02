import httpStatus from 'http-status';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from './user.service';
import { userCreateToken } from '../../utils/userCreateToken';
import { setCookies } from '../../utils/setCookies';

const getMeUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;

  const user = await userService.getMeUser(Number(userId));

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get me user successful",
    data: user,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userService.loginUser(email, password);

  const userTokens = await userCreateToken(user);
  setCookies(res, userTokens);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Login successful",
    data: { user, accessToken: userTokens.accessToken }
  });
});

const logoutUser = catchAsync(async (req: Request, res: Response) => {
  res.cookie("accessToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 0,
    path: "/"
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Logout successful",
    data: null,
  });
});

export const userController = {
  getMeUser,
  loginUser,
  logoutUser
};