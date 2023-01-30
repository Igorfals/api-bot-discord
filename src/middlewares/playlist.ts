import { ControllerResponse } from '../models/controller'
import { AddPlaylistController } from '../controllers/playlist-controller/add/add-playlist-controller'
import { GetPlaylistController } from '../controllers/playlist-controller/get/get-playlist-controller'
import { UpdatePlaylistController } from '../controllers/playlist-controller/update/update-playlist-controller'
import { DeletePlaylistController } from '../controllers/playlist-controller/delete/delete-playlist-controller'
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