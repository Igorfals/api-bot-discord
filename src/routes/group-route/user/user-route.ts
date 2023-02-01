import { Router } from 'express'
import { UserMiddleWare } from '../../../middlewares/user'

const router = Router()
const userMiddleWere = new UserMiddleWare()

router.post('/add', userMiddleWere.setUser)
router.get('/', userMiddleWere.getUser)
router.put('/update', userMiddleWere.updateUser)

export default router