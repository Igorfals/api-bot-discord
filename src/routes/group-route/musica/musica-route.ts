import { Router } from 'express'
import { MusicaMiddleWare } from '../../../middlewares/musica'
import { AuthMiddleWare } from '../../../middlewares/auth'

const router = Router()
const musicaMiddleWare = new MusicaMiddleWare()
const authMiddleWare = new AuthMiddleWare()

router.get('/playlist/:id', musicaMiddleWare.getMusicasPlaylist)
router.post('/add', authMiddleWare.authorize, musicaMiddleWare.setMusica)
router.get('/', authMiddleWare.authorize, musicaMiddleWare.getMusica)
router.put('/update', authMiddleWare.authorize, musicaMiddleWare.updateMusica)
router.delete('/delete/:id', authMiddleWare.authorize, musicaMiddleWare.deleteMusica)
export default router