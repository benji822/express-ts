"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetUserDetail_1 = require("./apiGetUserDetail");
const apiCreateUser_1 = require("./apiCreateUser");
const apiDeleteUser_1 = require("./apiDeleteUser");
const apiUpdateUser_1 = require("./apiUpdateUser");
exports.userRouter = express_1.Router();
exports.userRouter.route('/').post(apiCreateUser_1.apiCreateUser);
exports.userRouter
    .route('/:id')
    .get(apiGetUserDetail_1.apiGetUserDetail)
    .delete(apiDeleteUser_1.apiDeleteUser)
    .patch(apiUpdateUser_1.apiUpdateUser);
