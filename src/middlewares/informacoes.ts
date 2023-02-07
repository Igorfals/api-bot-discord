import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddInformacoesController, GetIndormacoesController, DeleteInformacoesController, UpdateInformacoesController } from '../controllers/informacoes-controller/'


const addController = new AddInformacoesController()
const getController = new GetIndormacoesController()
const updateController = new UpdateInformacoesController()
const deleteController = new DeleteInformacoesController()

export class InformacoesMiddleWare {
    async setInformacoes(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addController.setInformacoes(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async getInformacoes(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getController.getInformacoes(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async updateInformacoes(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updateController.updateInformacoes(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async deleteInformacoes(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deleteController.deleteInformacoes(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}