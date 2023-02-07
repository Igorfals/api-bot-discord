import { Request, Response } from 'express'

export class UploadMiddleWare {
    upload(req: Request, res: Response) {
        res.status(200).json({
            name: req.file.filename,
            url: `http://localhost:3000/uploads/${req.file.filename}`
        })
    }
}