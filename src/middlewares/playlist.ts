import { ControllerResponse } from '../models/controller'
import { AddPlaylistController } from '../controllers/playlist-controller/add/add-playlist-controller'
import { Response, Request } from 'express'


const addcontroller = new AddPlaylistController()

export class PlaylistMiddleWare {
    async setPlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setPlaylist(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}