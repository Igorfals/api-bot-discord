import { Router } from 'express'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const authMiddleWare = new AuthMiddleWare()

router.post('/login', authMiddleWare.login)

export default router