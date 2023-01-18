import { ControllerResponse } from '../models/controller'
import { AddPlaylistController } from '../controllers/playlist-controller/add/add-playlist-controller'
import { GetPlaylistController } from '../controllers/playlist-controller/get/get-playlist-controller'
import { Response, Request } from 'express'


const addcontroller = new AddPlaylistController()
const getcontroller = new GetPlaylistController()

export class PlaylistMiddleWare {
    async setPlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setPlaylist(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getPlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getPlaylist(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
}