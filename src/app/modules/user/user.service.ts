import { prisma } from "../../config/db";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";
import httpStatus from 'http-status';

const getAllUser = async () => {
    const getUser = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            role: true,
            status: true,
            Picture: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return getUser;
};

const createUser = async (payload: any) => {
    const { email, password, ...rest } = payload;
    if (!email || !password) {
        throw new AppError(httpStatus.BAD_REQUEST, "Email and password are required.");
    };

    const isExist = await prisma.user.findUnique({
        where: { email }
    });

    if (isExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "A user with this email already exists.");
    };

    const hashPassword = await bcrypt.hash(password as string, 10);

    const createdUser = await prisma.user.create({
        data: {
            email,
            password: hashPassword,
            ...rest
        }
    });

    return createdUser;
};

export const userService = {
    getAllUser,
    createUser,
};