import { Router } from 'express'
import { CategoriaMiddleWare } from '../../../middlewares/categoria'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const categoriaMiddleWare = new CategoriaMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.post('/add', authMiddleWare.authorize, categoriaMiddleWare.setCategoria)
router.get('/', authMiddleWare.authorize, categoriaMiddleWare.getCategoria)
router.put('/update', authMiddleWare.authorize, categoriaMiddleWare.updateCategoria)
router.delete('/delete/:id', authMiddleWare.authorize, categoriaMiddleWare.deleteCategoria)

export default router