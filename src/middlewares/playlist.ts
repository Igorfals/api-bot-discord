import { ControllerResponse } from '../models/controller'
import { AddPlaylistController, GetPlaylistController, UpdatePlaylistController, DeletePlaylistController } from '../controllers/playlist-controller/'
import { Response, Request } from 'express'

const addcontroller = new AddPlaylistController()
const getcontroller = new GetPlaylistController()
const updatecontroller = new UpdatePlaylistController()
const deletecontroller = new DeletePlaylistController()

export class PlaylistMiddleWare {
    async setPlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setPlaylist(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getPlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getPlaylist(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async updatePlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updatePlaylist(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async deletePlaylist(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deletePlaylist(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}