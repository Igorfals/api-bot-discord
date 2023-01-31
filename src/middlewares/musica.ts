import { ControllerResponse } from '../models/controller'
import { AddMusicaController } from '../controllers/musica-controller/add/add-musica.controller'
import { GetPlaylistController } from '../controllers/playlist-controller/get/get-playlist-controller'
import { Response, Request } from 'express'
import { GetMusicaController } from '../controllers/musica-controller/get/get-musica-controller'

const addcontroller = new AddMusicaController()
const getcontroller = new GetMusicaController()

export class MusicaMiddleWare {
    async setMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setMusica(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getMusica(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
}