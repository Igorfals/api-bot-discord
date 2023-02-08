import { Router } from 'express'
import { AnexoMiddleWare } from '../../../middlewares/anexo'
import { alternativeUpload } from '../../../helpers/upload'

const router = Router()
const upload = alternativeUpload()
const anexoMiddleWare = new AnexoMiddleWare()

router.post('/anexo-upload', upload.single('anexo'), anexoMiddleWare.setAnexo)
router.get('/add', anexoMiddleWare.getAnexo)
router.put('/update', upload.single('anexo'), anexoMiddleWare.updateAnexo)
router.delete('/delete/:id', anexoMiddleWare.deleteAnexo)

export default router