"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
const express_1 = __importDefault(require("express"));
const Role_1 = require("../controllers/Role");
exports.roleRouter = express_1.default.Router();
exports.roleRouter.post("/role", Role_1.addRole);
