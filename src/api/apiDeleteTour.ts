import { RequestHandler } from 'express';
import { DataStore } from '../data/data';

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex(
        (item: any) => item.id === tourId
    );
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json({ status: 'success', message: 'Element removed!' });
    } else {
        res.json({ status: 'error', message: 'Element not found!' });
    }
};
