import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { getFileUploader } from '../general/static';
import { PublicInfo, APIError } from '../../../model/shared/messages';

export const apiUploadimage: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex(
        (item: any) => item.id === tourId
    );
    if (tourIndex === -1) {
        next(new APIError('Failed', 'Tour not found', 400));
    } else {
        const upload = getFileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                console.log(err);
                next(new APIError('Error', 'File upload failed', 400));
            } else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(new PublicInfo('File Uploaded', 200));
            }
        });
    }
};
