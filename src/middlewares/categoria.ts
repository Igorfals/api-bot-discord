import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddCategoriaController } from '../controllers/categoria-controller/add/add-categoria-controller'
import { GetCategoriaController } from '../controllers/categoria-controller/get/get-categoria-controller'

const addController = new AddCategoriaController()
const getController = new GetCategoriaController()

export class CategoriaMiddleWare {
    async setCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addController.setCategoria(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getController.getCategoria(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }

}