import { prisma } from "../../config/db";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";
import httpStatus from 'http-status';
import jwt from "jsonwebtoken";

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

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "JWT_SECRET is not defined.");
    }

    const token = jwt.sign(
        { userId: user.id, role: user.role, email: user.email },
        secret,
        { expiresIn: "7d" }
    );

    return { user, token };
};

export const userService = {
    loginUser
};