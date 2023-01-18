import { Router } from 'express'
import { PlaylistMiddleWare } from '../../../middlewares/playlist'


const router = Router()
const playlistMiddleWare = new PlaylistMiddleWare()

router.post('/add', playlistMiddleWare.setPlaylist)
router.get('/', playlistMiddleWare.getPlaylist)
router.put('/update', playlistMiddleWare.updatePlaylist)
export default router