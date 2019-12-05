import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../../model/shared/tourDetail';
import { fileMapper } from '../general/static';

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
        res.json({ status: 'failed', message: 'Element not found' });
    }
};
