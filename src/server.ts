import express = require('express');

import { DataStore } from './data/data';
import { apiGetTours } from './api/apiGetTours';
import { apiGetTourDetail } from './api/apiGetTourDetail';

const app = express();

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);
app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', (req, res, next) => {
    res.send('create new tour item');
});

app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
