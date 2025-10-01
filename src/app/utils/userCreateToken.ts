import { generateToken } from "./jwt";

export const userCreateToken = (user: any) => {
    if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
        throw new Error("JWT_SECRET or JWT_EXPIRES_IN is not defined");
    }

    const jwtPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
    };

    const accessToken = generateToken(
        jwtPayload,
        process.env.JWT_SECRET,
        process.env.JWT_EXPIRES_IN
    );

    return { accessToken };
};
