"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
exports.apiUpdateTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id === tourId);
    if (tourIndex > -1) {
        const originalData = data_1.DataStore.tours[tourIndex];
        const newTour = {
            id: tourId,
            location: req.body.location || originalData.location,
            tourTitle: req.body.tourTitle || originalData.tourTitle,
            tourCategory: req.body.tourCategory || originalData.tourCategory,
            tourDescription: req.body.tourDescription || originalData.tourDescription,
            price: req.body.price || originalData.price,
            currency: req.body.currency || originalData.currency,
            img: originalData.img
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json({ status: 'success', message: 'Element updated!' });
    }
    else {
        res.json({ status: 'error', message: 'Element not found!' });
    }
};
