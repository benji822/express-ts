"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const static_1 = require("../general/static");
const messages_1 = require("../../../model/shared/messages");
exports.apiUploadimage = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id === tourId);
    if (tourIndex === -1) {
        next(new messages_1.APIError('Failed', 'Tour not found', 400));
    }
    else {
        const upload = static_1.getFileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                console.log(err);
                next(new messages_1.APIError('Error', 'File upload failed', 400));
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(new messages_1.PublicInfo('File Uploaded', 200));
            }
        });
    }
};
