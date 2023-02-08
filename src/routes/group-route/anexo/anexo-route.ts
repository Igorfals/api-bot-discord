import { Router } from 'express'
import { AnexoMiddleWare } from '../../../middlewares/anexo'
import { alternativeUpload } from '../../../helpers/upload'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const upload = alternativeUpload()
const anexoMiddleWare = new AnexoMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.post('/anexo-upload', authMiddleWare.authorize, upload.single('anexo'), anexoMiddleWare.setAnexo)
router.get('/add', authMiddleWare.authorize, anexoMiddleWare.getAnexo)
router.put('/update', authMiddleWare.authorize, upload.single('anexo'), anexoMiddleWare.updateAnexo)
router.delete('/delete/:id', authMiddleWare.authorize, anexoMiddleWare.deleteAnexo)

export default router