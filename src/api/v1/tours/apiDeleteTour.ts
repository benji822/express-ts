import { RequestHandler } from 'express';
import { DataStore } from '../../../data/data';
import { PublicInfo, APIError } from '../../../model/shared/messages';

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex(
        (item: any) => item.id === tourId
    );
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json(new PublicInfo('Tour delete', 200));
    } else {
        next(new APIError('Validation Error', 'Tour not found', 400));
    }
};
