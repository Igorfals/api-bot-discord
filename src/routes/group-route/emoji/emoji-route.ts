import { Router } from 'express'
import { EmojiMiddleWare } from '../../../middlewares/emoji'
import { alternativeUpload } from '../../../helpers/upload'

const router = Router()
const upload = alternativeUpload()
const emojiMiddleWare = new EmojiMiddleWare()

router.post('/add-upload', upload.single('emoji'), emojiMiddleWare.setEmoji)

export default router