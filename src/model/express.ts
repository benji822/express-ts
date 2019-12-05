import { Request, Response, NextFunction } from 'express';

export interface CustomRequest extends Request {
    user?: string;
}

export interface CustomResponse extends Response {}

export type CustomRequestHandler = (
    res: CustomRequest,
    req: CustomResponse,
    next: NextFunction
) => any;
