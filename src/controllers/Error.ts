import { Request, Response, NextFunction } from "express";

export const handleError = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "error: something went wrong" });
};
