import { Router } from 'express'
import { EmojiMiddleWare } from '../../../middlewares/emoji'
import { alternativeUpload } from '../../../helpers/upload'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const upload = alternativeUpload()
const emojiMiddleWare = new EmojiMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.post('/add-upload', authMiddleWare.authorize, upload.single('emoji'), emojiMiddleWare.setEmoji)
router.get('/', authMiddleWare.authorize, emojiMiddleWare.getEmoji)
router.put('/update', authMiddleWare.authorize, upload.single('emoji'), emojiMiddleWare.updateEmoji)
router.delete('/delete/:id', authMiddleWare.authorize, emojiMiddleWare.deleteEmoji)
export default router