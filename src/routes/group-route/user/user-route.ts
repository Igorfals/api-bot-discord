import { Router } from 'express'
import { UserMiddleWare } from '../../../middlewares/user'
import { AuthMiddleWare } from '../../../middlewares/auth'
import { alternativeUpload } from '../../../helpers/upload'

const upload = alternativeUpload()
const router = Router()
const userMiddleWere = new UserMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.put('/update-avatar', authMiddleWare.authorize, upload.single('avatar'), userMiddleWere.uploadAvatar)
router.post('/add', authMiddleWare.authorize, userMiddleWere.setUser)
router.get('/', authMiddleWare.authorize, userMiddleWere.getUser)
router.put('/update', authMiddleWare.authorize, userMiddleWere.updateUser)
router.delete('/delete/:id', authMiddleWare.authorize, userMiddleWere.deleteUser)

export default router