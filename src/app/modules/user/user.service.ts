import { prisma } from "../../config/db";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";
import httpStatus from 'http-status';

const loginUser = async (email: string, password: string) => {
    if (!email || !password) {
        throw new AppError(httpStatus.BAD_REQUEST, "Email and password are required.");
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials.");
    }

    return user;
};

export const userService = {
    loginUser
};