import { Router } from 'express';
import { jsonParser } from '../general/bodyParser';

import { apiGetTours } from './apiGetTours';
import { apiCreateTour } from './apiCreateTour';
import { apiDeleteTour } from './apiDeleteTour';
import { apiGetTourDetail } from './apiGetTourDetail';
import { apiUpdateTour } from './apiUpdateTour';
import { apiUploadimage } from './apiUploadimage';

export let toursRouter = Router();

toursRouter
    .route('/')
    .get(apiGetTours)
    .post(jsonParser, apiCreateTour);

toursRouter
    .route('/:id')
    .get(apiGetTourDetail)
    .delete(apiDeleteTour)
    .patch(jsonParser, apiUpdateTour);

toursRouter.post('/:id/img', apiUploadimage);
