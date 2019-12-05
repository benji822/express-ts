import { RequestHandler } from 'express';

export const apiGetUserDetail: RequestHandler = (req, res, next) => {
    const userId = req.params.id;
    res.send(`Detail for the User with id ${userId}`);
};
