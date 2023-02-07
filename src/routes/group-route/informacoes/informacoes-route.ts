import { Router } from 'express'
import { InformacoesMiddleWare } from '../../../middlewares/informacoes'

const router = Router()
const informacoesMiddleWare = new InformacoesMiddleWare()

router.post('/add', informacoesMiddleWare.setInformacoes)

export default router