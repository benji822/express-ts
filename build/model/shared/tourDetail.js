"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("./tourSummary");
const review_1 = require("./review");
class TourDetail extends tourSummary_1.TourSummary {
    constructor(tourData, reviewData) {
        super(tourData);
        this.tourCategory = tourData.tourCategory;
        this.tourDescription = tourData.tourDescription;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.review = reviewData.map((item) => new review_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
