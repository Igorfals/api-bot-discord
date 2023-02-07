import { Router } from 'express'
import { InformacoesMiddleWare } from '../../../middlewares/informacoes'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const authMiddleWare = new AuthMiddleWare()
const informacoesMiddleWare = new InformacoesMiddleWare()

router.post('/add', authMiddleWare.authorize, informacoesMiddleWare.setInformacoes)
router.get('/', authMiddleWare.authorize, informacoesMiddleWare.getInformacoes)
router.put('/update', authMiddleWare.authorize, informacoesMiddleWare.updateInformacoes)
router.delete('/delete/:id', authMiddleWare.authorize, informacoesMiddleWare.deleteInformacoes)

export default router