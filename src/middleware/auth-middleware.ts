import { Request, Response, NextFunction } from "express";

const authToken = process.env.AUTH_TOKEN;

if (!authToken) {
    throw new Error("AUTH_TOKEN is not set");
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token as string;

    if (token === authToken) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
};