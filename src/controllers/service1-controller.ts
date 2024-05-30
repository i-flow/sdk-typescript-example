import { Request, Response } from "express";

export const service1Controller = (req: Request, res: Response) => {
    res.json({ message: req.query.param1 });
};
