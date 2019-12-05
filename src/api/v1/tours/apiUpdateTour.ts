import { RequestHandler } from 'express';
import { DataStore } from '../../../data/data';

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex(
        (item: any) => item.id === tourId
    );

    if (tourIndex > -1) {
        const originalData = DataStore.tours[tourIndex];
        const newTour = {
            id: tourId,
            location: req.body.location || originalData.location,
            tourTitle: req.body.tourTitle || originalData.tourTitle,
            tourCategory: req.body.tourCategory || originalData.tourCategory,
            tourDescription:
                req.body.tourDescription || originalData.tourDescription,
            price: req.body.price || originalData.price,
            currency: req.body.currency || originalData.currency,
            img: originalData.img
        };
        DataStore.tours[tourIndex] = newTour;
        res.json({ status: 'success', message: 'Element updated!' });
    } else {
        res.json({ status: 'error', message: 'Element not found!' });
    }
};
