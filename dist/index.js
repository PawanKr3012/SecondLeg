"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const database_1 = require("./config/database");
const Error_1 = require("./controllers/Error");
const Role_1 = require("./models/Role");
const User_1 = require("./models/User");
const Role_2 = require("./routes/Role");
const User_2 = require("./routes/User");
dotenv.config();
const PORT = process.env.port || 8000;
const app = (0, express_1.default)();
database_1.db.authenticate()
    .then(() => {
    console.log("Database connected...");
})
    .catch((err) => {
    console.log("Error: " + err);
});
app.use(express_1.default.json());
app.use(User_2.userRouter);
app.use(Role_2.roleRouter);
app.use(Error_1.handleError);
Role_1.Role.hasMany(User_1.User);
User_1.User.belongsTo(Role_1.Role);
// db.sync({ force: true })
database_1.db.sync()
    .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
    .catch((err) => console.log("Error: " + err));
