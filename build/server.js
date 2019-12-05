"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apiGetTours_1 = require("./api/apiGetTours");
const apiGetTourDetail_1 = require("./api/apiGetTourDetail");
const app = express();
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.get('/tours', apiGetTours_1.apiGetTours);
app.get('/tours/:id', apiGetTourDetail_1.apiGetTourDetail);
app.post('/tours', (req, res, next) => {
    res.send('create new tour item');
});
app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
