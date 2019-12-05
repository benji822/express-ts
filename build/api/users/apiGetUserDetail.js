"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetUserDetail = (req, res, next) => {
    const userId = req.params.id;
    res.send(`Detail for the User with id ${userId}`);
};
