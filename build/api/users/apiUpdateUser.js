"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateUser = (req, res, next) => {
    const userId = req.params.id;
    res.send(`Updated User detail with id of ${userId}`);
};
