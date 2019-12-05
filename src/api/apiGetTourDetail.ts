import { DataStore } from '../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../model/shared/tourDetail';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const selectedTour = DataStore.tours.find((el: any) => el.id === tourId);
    if (selectedTour) {
        const selectedReview = DataStore.reviews.filter(
            (item: any) => item.tourId === tourId
        );
        res.json(new TourDetail(selectedTour, selectedReview));
    } else {
        res.json({ status: 'failed', message: 'Element not found' });
    }
};
