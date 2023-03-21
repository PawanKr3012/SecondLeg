import { NextFunction, Request, Response } from "express";

import { User } from "../models/User";
import { getExternalUser, validateUser } from "../utils/Helper";
import { UserType } from "../utils/TscTypes";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll();
    const externalUser = await getExternalUser(next);
    const combinedUsers = [...users, ...(externalUser as UserType[])];
    res.status(200).json({ message: "All users", data: combinedUsers });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, age, roleId } = req.body;

  try {
    validateUser(req);
    const user = await User.create({ name, age, roleId });
    res.status(200).json({ message: "user created", data: user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const user = await User.destroy({ where: { id: id } });
    res.status(200).json({ message: "user deleted", data: user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await User.update({ name: "p" }, { where: { id } });
    res.status(200).json({ message: "user updated", data: user });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
