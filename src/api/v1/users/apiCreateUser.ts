import { RequestHandler } from 'express';

export const apiCreateUser: RequestHandler = (req, res, next) => {
    res.send(`User has been created`);
};
