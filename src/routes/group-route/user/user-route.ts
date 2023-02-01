import { Router } from 'express'
import { UserMiddleWare } from '../../../middlewares/user'

const router = Router()
const userMiddleWere = new UserMiddleWare()

router.post('/add', userMiddleWere.setUser)



export default router