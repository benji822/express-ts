import { RequestHandler } from 'express';
import { DataStore } from '../../../data/data';
import { PublicInfo, APIError } from '../../../model/shared/messages';

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
        res.json(
            new PublicInfo('Tour updated successfully', 200, { tour: newTour })
        );
    } else {
        next(new APIError('Failed', 'Tour not found', 400));
    }
};
