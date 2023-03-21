"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const User_1 = require("../controllers/User");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/user", [
    (0, express_validator_1.body)("name").isString().withMessage("Name should be a string"),
    (0, express_validator_1.body)("age").isNumeric().withMessage("Age should be a number"),
], User_1.addUser);
exports.userRouter.get("/user", User_1.getUsers);
exports.userRouter.put("/user/:id", User_1.updateUser);
exports.userRouter.delete("/user/:id", User_1.deleteUser);
