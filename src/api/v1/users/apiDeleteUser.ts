import { RequestHandler } from 'express';

export const apiDeleteUser: RequestHandler = (req, res, next) => {
    const userId = req.params.id;
    res.send(`User ${userId} has been Deleted`);
};
