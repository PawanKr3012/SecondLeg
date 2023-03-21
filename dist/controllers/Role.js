"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRole = void 0;
const Role_1 = require("../models/Role");
const addRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const user = yield Role_1.Role.create({ name });
        res.status(200).json({ message: "role created", data: user });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.addRole = addRole;
