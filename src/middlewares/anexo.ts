import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddAnexoController, GetAnexoController, UpdateAnexoController, DeleteAnexoController } from '../controllers/anexo-controller/'

const addController = new AddAnexoController()
const getController = new GetAnexoController()
const updateController = new UpdateAnexoController()
const deleteController = new DeleteAnexoController()

export class AnexoMiddleWare {
    async setAnexo(req: Request, res: Response): Promise<void> {
        const request = {
            titulo: req.body.titulo,
            filename: req.file.filename,
            users_id: req.body.users_id
        }
        const dados: ControllerResponse = await addController.setAnexo(request)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async getAnexo(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getController.getAnexo(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async updateAnexo(req: Request, res: Response): Promise<void> {
        const request = {
            titulo: req.body.titulo,
            filename: req.file.filename,
            id: req.body.id,
            users_id: req.body.users_id
        }
        const dados: ControllerResponse = await updateController.updateAnexo(request)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async deleteAnexo(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deleteController.deleteAnexo(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}