import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddAnexoController } from '../controllers/anexo-controller/add/add-anexo-controller'
import { GetAnexoController } from '../controllers/anexo-controller/get/get-anexo-controller'

const addController = new AddAnexoController()
const getController = new GetAnexoController()

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
}