import { Router } from 'express'
import { PlaylistMiddleWare } from '../../../middlewares/playlist'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const authMiddleWare = new AuthMiddleWare()
const playlistMiddleWare = new PlaylistMiddleWare()

router.post('/add', authMiddleWare.authorize, playlistMiddleWare.setPlaylist)
router.get('/', authMiddleWare.authorize, playlistMiddleWare.getPlaylist)
router.put('/update', authMiddleWare.authorize, playlistMiddleWare.updatePlaylist)
router.delete('/delete/:id', authMiddleWare.authorize, playlistMiddleWare.deletePlaylist)
export default router