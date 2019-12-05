import { RequestHandler } from 'express';

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    const userId = req.params.id;
    res.send(`Updated User detail with id of ${userId}`);
};
