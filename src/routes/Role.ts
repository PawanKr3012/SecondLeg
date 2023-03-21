import express from "express";
import { addRole } from "../controllers/Role";

export const roleRouter = express.Router();

roleRouter.post("/role", addRole);
