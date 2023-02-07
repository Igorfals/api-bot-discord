import { UploadMiddleWare } from '../../../middlewares/upload'
import { Router } from 'express'
import { alternativeUpload } from '../../../helpers/upload'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const uploadMiddleWare = new UploadMiddleWare()
const upload = alternativeUpload()
const authMiddleWare = new AuthMiddleWare()

router.post('/', authMiddleWare.authorize, upload.single('file'), uploadMiddleWare.upload)

export default router