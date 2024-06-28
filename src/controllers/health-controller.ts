import { Request, Response } from "express";

export const healthController = (req: Request, res: Response) => {
    res.json({ status: "OK" });
};
