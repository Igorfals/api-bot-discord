import { Router } from 'express'
import { UserMiddleWare } from '../../../middlewares/user'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const userMiddleWere = new UserMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.post('/add', authMiddleWare.authorize, userMiddleWere.setUser)
router.get('/', authMiddleWare.authorize, userMiddleWere.getUser)
router.put('/update', authMiddleWare.authorize, userMiddleWere.updateUser)
router.delete('/delete/:id', authMiddleWare.authorize, userMiddleWere.deleteUser)

export default router