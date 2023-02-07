import { ControllerResponse } from '../models/controller'
import { AddMusicaController, GetMusicaController, UpdateMusicaController, DeleteMusicaController } from '../controllers/musica-controller/'
import { Response, Request } from 'express'

const addcontroller = new AddMusicaController()
const getcontroller = new GetMusicaController()
const updatecontroller = new UpdateMusicaController()
const deletecontroller = new DeleteMusicaController()

export class MusicaMiddleWare {
    async setMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setMusica(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getMusica(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async updateMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updateMusica(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async deleteMusica(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deleteMusica(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}