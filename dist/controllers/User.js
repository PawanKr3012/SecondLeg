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
exports.updateUser = exports.deleteUser = exports.addUser = exports.getUsers = void 0;
const User_1 = require("../models/User");
const Helper_1 = require("../utils/Helper");
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.findAll();
        const externalUser = yield (0, Helper_1.getExternalUser)(next);
        const combinedUsers = [...users, ...externalUser];
        res.status(200).json({ message: "All users", data: combinedUsers });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.getUsers = getUsers;
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, roleId } = req.body;
    try {
        (0, Helper_1.validateUser)(req);
        const user = yield User_1.User.create({ name, age, roleId });
        res.status(200).json({ message: "user created", data: user });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.addUser = addUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.User.destroy({ where: { id: id } });
        res.status(200).json({ message: "user deleted", data: user });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.User.update({ name: "p" }, { where: { id } });
        res.status(200).json({ message: "user updated", data: user });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.updateUser = updateUser;
