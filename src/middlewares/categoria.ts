import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddCategoriaController } from '../controllers/categoria-controller/add/add-categoria-controller'
import { GetCategoriaController } from '../controllers/categoria-controller/get/get-categoria-controller'
import { UpdateCategoriaController } from '../controllers/categoria-controller/update/update-categoria-controller'
import { DeleteCategoriaController } from '../controllers/categoria-controller/delete/delete-categoria-controller'

const addController = new AddCategoriaController()
const getController = new GetCategoriaController()
const updateController = new UpdateCategoriaController()
const deleteController = new DeleteCategoriaController()

export class CategoriaMiddleWare {
    async setCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addController.setCategoria(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async getCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getController.getCategoria(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async updateCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updateController.updateCategoria(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async deleteCategoria(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deleteController.deleteCategoria(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}