import { Router } from 'express'
import { MusicaMiddleWare } from '../../../middlewares/musica'

const router = Router()
const musicaMiddleWare = new MusicaMiddleWare()

router.post('/add', musicaMiddleWare.setMusica)

export default router