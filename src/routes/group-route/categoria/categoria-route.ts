import { Router } from 'express'
import { CategoriaMiddleWare } from '../../../middlewares/categoria'

const router = Router()
const categoriaMiddleWare = new CategoriaMiddleWare()

router.post('/add', categoriaMiddleWare.setCategoria)
router.get('/', categoriaMiddleWare.getCategoria)
router.put('/update', categoriaMiddleWare.updateCategoria)
export default router