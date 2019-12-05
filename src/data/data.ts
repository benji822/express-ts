import jsonReview from './reviews.json';
import jsonTours from './tours.json';

export class DataStore {
    static tours = jsonTours;
    static reviews = jsonReview;
}
