import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

interface User {
    _id: Types.ObjectId;
    email: string;
}

export interface AuthenticatedRequest extends Request {
    user: User;
}

export const loginMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        const token =
            req.cookies.token ||
            (authHeader?.startsWith("Bearer ")
                ? authHeader.split(" ")[1]
                : authHeader);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        req.user = decodedToken as User;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
};