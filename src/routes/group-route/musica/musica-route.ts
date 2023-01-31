import { Router } from 'express'
import { MusicaMiddleWare } from '../../../middlewares/musica'

const router = Router()
const musicaMiddleWare = new MusicaMiddleWare()

router.post('/add', musicaMiddleWare.setMusica)
router.get('/', musicaMiddleWare.getMusica)
router.put('/update', musicaMiddleWare.updateMusica)
router.delete('/delete/:id', musicaMiddleWare.deleteMusica)
export default router