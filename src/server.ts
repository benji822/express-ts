import express = require('express');
import * as bodyParser from 'body-parser';
import morgan from 'morgan';

const jsonParser = bodyParser.json();

import { DataStore } from './data/data';
import { apiGetTours } from './api/apiGetTours';
import { apiGetTourDetail } from './api/apiGetTourDetail';
import { apiCreateTour } from './api/apiCreateTour';
import { apiDeleteTour } from './api/apiDeleteTour';
import { apiUpdateTour } from './api/apiUpdateTour';
import { CustomRequestHandler } from './model/express';

const app = express();

const logger = morgan('dev');
app.use(logger);

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);
app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.patch('/tours/:id', jsonParser, apiUpdateTour);

app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
