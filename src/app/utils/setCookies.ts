import { Response } from "express";

export interface AuthTokens {
    accessToken?: string;
};

export const setCookies = (res: Response, token: AuthTokens) => {

    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none"
        });
    }
};