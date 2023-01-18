import { Router } from 'express'
import { PlaylistMiddleWare } from '../../../middlewares/playlist'


const router = Router()
const playlistMiddleWare = new PlaylistMiddleWare()

router.post('/add', playlistMiddleWare.setPlaylist)
router.get('/', playlistMiddleWare.getPlaylist)

export default router