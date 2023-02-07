import { Router } from 'express'
import { InformacoesMiddleWare } from '../../../middlewares/informacoes'

const router = Router()
const informacoesMiddleWare = new InformacoesMiddleWare()

router.post('/add', informacoesMiddleWare.setInformacoes)
router.get('/', informacoesMiddleWare.getInformacoes)
router.put('/update', informacoesMiddleWare.updateInformacoes)

export default router