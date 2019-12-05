"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const jsonParser = bodyParser.json();
const apiGetTours_1 = require("./api/apiGetTours");
const apiGetTourDetail_1 = require("./api/apiGetTourDetail");
const apiCreateTour_1 = require("./api/apiCreateTour");
const apiDeleteTour_1 = require("./api/apiDeleteTour");
const apiUpdateTour_1 = require("./api/apiUpdateTour");
const app = express();
const logger = morgan_1.default('dev');
app.use(logger);
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.get('/tours', apiGetTours_1.apiGetTours);
app.get('/tours/:id', apiGetTourDetail_1.apiGetTourDetail);
app.post('/tours', jsonParser, apiCreateTour_1.apiCreateTour);
app.delete('/tours/:id', apiDeleteTour_1.apiDeleteTour);
app.patch('/tours/:id', jsonParser, apiUpdateTour_1.apiUpdateTour);
app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
