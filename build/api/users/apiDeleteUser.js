"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDeleteUser = (req, res, next) => {
    const userId = req.params.id;
    res.send(`User ${userId} has been Deleted`);
};
