import { Request, Response } from "express";

export const service2Controller = (req: Request, res: Response) => {
    res.json({ message: req.body });
};
