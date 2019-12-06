"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const messages_1 = require("../../../model/shared/messages");
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
        res.json(new messages_1.PublicInfo('Tour updated successfully', 200, { tour: newTour }));
    }
    else {
        next(new messages_1.APIError('Failed', 'Tour not found', 400));
    }
};
