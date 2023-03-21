"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = require("../config/database");
exports.Role = database_1.db.define("role", {
    id: {
        type: sequelize_1.default.UUID,
        defaultValue: sequelize_1.default.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
}, {
    paranoid: true,
    timestamps: true,
});
