import axios from "axios";
import { validationResult } from "express-validator";
import { NextFunction, Request } from "express";
import { UserType } from "./TscTypes";

export const validateUser = (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    throw error;
  }
};

export const getExternalUser = async (next: NextFunction): Promise<UserType[] | undefined> => {
  try {
    const date = new Date();
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
    let updatedUsers: UserType[] = [];
    for (let i = 0; i < users.length; i++) {
      updatedUsers.push({
        id: `adfgerefdf${i}`,
        name: users[i].name,
        age: 30,
        createdAt: date,
        updatedAt: date,
        roleId: "25e31a88-16b6-41c0-b1f2-cc9f6cc9e1b9",
      });
    }
    return updatedUsers;
  } catch (err) {
    next(err);
  }
};
