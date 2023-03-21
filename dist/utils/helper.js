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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalUser = exports.validateUser = void 0;
const axios_1 = __importDefault(require("axios"));
const express_validator_1 = require("express-validator");
const validateUser = (req) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new Error(errors.array()[0].msg);
        throw error;
    }
};
exports.validateUser = validateUser;
const getExternalUser = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = new Date();
        const { data: users } = yield axios_1.default.get("https://jsonplaceholder.typicode.com/users");
        let updatedUsers = [];
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
    }
    catch (err) {
        next(err);
    }
});
exports.getExternalUser = getExternalUser;
