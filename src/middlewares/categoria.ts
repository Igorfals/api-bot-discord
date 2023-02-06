import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddCategoriaController } from '../controllers/categoria-controller/add/add-categoria-controller'

const categoriaController = new AddCategoriaController()

export class CategoriaMiddleWare {
    async setCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await categoriaController.setCategoria(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}