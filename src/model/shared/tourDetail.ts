import { TourSummary } from './tourSummary';
import { Review } from './review';

export class TourDetail extends TourSummary {
    tourCategory: string;
    tourDescription: string;
    price: number;
    currency: string;
    review: Review[];

    constructor(tourData: any, reviewData: any) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.review = reviewData.map((item: any) => new Review(item));
    }
}
