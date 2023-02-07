import multer from "multer"
import * as crypto from 'crypto'

export function alternativeUpload() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, `${crypto.randomUUID()}-${file.originalname.replaceAll(' ', '-')}`)
        }
    })
    return multer({ storage: storage })
}