"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviews_json_1 = __importDefault(require("./reviews.json"));
const tours_json_1 = __importDefault(require("./tours.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.tours = tours_json_1.default;
DataStore.reviews = reviews_json_1.default;
