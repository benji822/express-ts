"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.get('/tours', (req, res, next) => {
    res.send('Tour listing....');
});
app.post('/tours', (req, res, next) => {
    res.send('create new tour item');
});
app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
