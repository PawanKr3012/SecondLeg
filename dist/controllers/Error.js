"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, req, res, next) => {
    res.status(500).json({ message: "error: something went wrong" });
};
exports.handleError = handleError;
