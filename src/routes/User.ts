import express from "express";
import { body } from "express-validator";

import { addUser, deleteUser, getUsers, updateUser } from "../controllers/User";

export const userRouter = express.Router();

userRouter.post(
  "/user",
  [
    body("name").isString().withMessage("Name should be a string"),
    body("age").isNumeric().withMessage("Age should be a number"),
  ],
  addUser
);
userRouter.get("/user", getUsers);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);
