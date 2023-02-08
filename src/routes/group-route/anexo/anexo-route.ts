import { Router } from 'express'
import { AnexoMiddleWare } from '../../../middlewares/anexo'
import { alternativeUpload } from '../../../helpers/upload'

const router = Router()
const upload = alternativeUpload()
const anexoMiddleWare = new AnexoMiddleWare()

router.post('/anexo-upload', upload.single('anexo'), anexoMiddleWare.setAnexo)
router.get('/add', anexoMiddleWare.getAnexo)

export default router