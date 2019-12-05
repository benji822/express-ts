import { Router } from 'express';
import { apiGetUserDetail } from './apiGetUserDetail';
import { apiCreateUser } from './apiCreateUser';
import { apiDeleteUser } from './apiDeleteUser';
import { apiUpdateUser } from './apiUpdateUser';

export let userRouter = Router();

userRouter.route('/').post(apiCreateUser);

userRouter
    .route('/:id')
    .get(apiGetUserDetail)
    .delete(apiDeleteUser)
    .patch(apiUpdateUser);
