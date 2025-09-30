import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const checkAuth = (allowedRoles: string[] = []) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

            if (!token) {
                throw new AppError(401, "Unauthorized: No token provided");
            }

            const secret = process.env.JWT_SECRET;
            if (!secret) {
                throw new AppError(500, "JWT_SECRET is not defined");
            }

            const decoded = jwt.verify(token, secret) as JwtPayload;
            if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
                throw new AppError(403, "Forbidden: Insufficient role");
            }

            req.user = decoded;
            next();
        } catch (err) {
            next(err);
        }
    };
};