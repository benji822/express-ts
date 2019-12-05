import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { getFileUploader } from '../general/static';

export const apiUploadimage: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex(
        (item: any) => item.id === tourId
    );
    if (tourIndex === -1) {
        res.json({ status: 'failed', message: 'Tour not found' });
    } else {
        const upload = getFileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                console.log(err);
                res.json({ status: 'error', message: 'File Upload Failed!' });
            } else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json({ status: 'success', message: 'File Uploaded!' });
            }
        });
    }
};
