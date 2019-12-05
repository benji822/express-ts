import { TourSummary } from './tourSummary';
import { Review } from './review';

export class TourDetail extends TourSummary {
    tourCategory: string;
    tourDescription: string;
    price: number;
    currency: string;
    img: string[];
    review: Review[];

    constructor(tourData: any, reviewData: any, tourImages: string[]) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.img = tourImages;
        this.review = reviewData.map((item: any) => new Review(item));
    }
}
