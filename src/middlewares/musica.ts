import { ControllerResponse } from '../models/controller'
import { AddMusicaController } from '../controllers/musica-controller/add/add-musica.controller'
import { Response, Request } from 'express'

const addcontroller = new AddMusicaController()


export class MusicaMiddleWare {
    async setMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setMusica(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}