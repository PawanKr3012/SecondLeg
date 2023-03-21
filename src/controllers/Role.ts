import { Request, Response, NextFunction } from "express";
import { Role } from "../models/Role";

export const addRole = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  try {
    const user = await Role.create({ name });
    res.status(200).json({ message: "role created", data: user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
