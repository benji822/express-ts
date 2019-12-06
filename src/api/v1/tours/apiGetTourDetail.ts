import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../../model/shared/tourDetail';
import { fileMapper } from '../general/static';
import { APIError } from '../../../model/shared/messages';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const selectedTour = DataStore.tours.find((el: any) => el.id === tourId);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(fileMapper(req.app.get('env')));
        const selectedReview = DataStore.reviews.filter(
            (item: any) => item.tourId === tourId
        );
        res.json(new TourDetail(selectedTour, selectedReview, imageUrls));
    } else {
        next(new APIError('Failed', 'Element not found', 400));
    }
};
