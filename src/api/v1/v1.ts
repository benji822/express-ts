import express = require('express');
import { Router } from 'express';
import path from 'path';

import { logger } from './general/logging';
import { userRouter } from './users/apiUsers';
import { toursRouter } from './tours/apiTours';
import { apiErrorHandler } from './general/errorHandling';

export let routerV1 = Router();

routerV1.use(logger);

routerV1.use('/static', express.static(path.resolve('./src', 'public', 'img')));

routerV1.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

routerV1.use('/users', userRouter);

routerV1.use('/tours', toursRouter);

routerV1.use(apiErrorHandler);
