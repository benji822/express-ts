"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const tourDetail_1 = require("../model/shared/tourDetail");
const static_1 = require("../api/general/static");
exports.apiGetTourDetail = (req, res, next) => {
    const tourId = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((el) => el.id === tourId);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(static_1.fileMapper(req.app.get('env')));
        const selectedReview = data_1.DataStore.reviews.filter((item) => item.tourId === tourId);
        res.json(new tourDetail_1.TourDetail(selectedTour, selectedReview, imageUrls));
    }
    else {
        res.json({ status: 'failed', message: 'Element not found' });
    }
};
